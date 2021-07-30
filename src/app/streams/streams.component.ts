import { Component, OnDestroy } from '@angular/core';
import { Observable, merge, timer, Subscription } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})

export class StreamsComponent implements OnDestroy {

  private _sum = 0;
  private _isDisabled = false;
  private _formData: FormData[] = [
    {title: "Первый поток", streamNumber: 0, streamIds: []},
    {title: "Второй поток", streamNumber: 1, streamIds: []},
    {title: "Третий поток", streamNumber: 2, streamIds: []},
  ]
  private stream4: Subscription;

  constructor() { }

  ngOnDestroy(): void {
    if (this.stream4)
      this.stream4.unsubscribe();
  }

  get sum() {
    return this._sum;
  } 

  get isDisabled() {
    return this._isDisabled;
  }

  get formData() {
    return this._formData;
  }


  public run() {
    this.clear();
    this._isDisabled = true;

    const stream1 = this.createStream(0, 1000);
    const stream2 = this.createStream(1, 1500);
    const stream3 = this.createStream(2, 2000);

    this.stream4 = merge(
      stream1, 
      stream2.pipe(skipUntil(timer(10000))), 
      stream3.pipe(skipUntil(timer(20000))),  
    ).subscribe((val: StreamObject) => {
      this._sum += val.id;
      this._formData[val.stream].streamIds.push(val.id);
    }) 
    
    setTimeout(()=> {
      this.stream4.unsubscribe();
      this._isDisabled = false;
    }, 30000);

  }

  private createStream(streamNumber: number, time: number) {
    return new Observable<StreamObject>((sub) => {
      let counter = 1;
      const interval = setInterval(() => sub.next({id: counter++, stream: streamNumber}), time);

      return () => {
        clearInterval(interval);
      }
    });
  }

  private clear() {
    this._sum = 0;
    this._formData[0].streamIds = [];
    this._formData[1].streamIds = [];
    this._formData[2].streamIds = [];
  }
 
}

interface StreamObject {
  id: number; 
  stream: number;
}

interface FormData {
  title: string;
  streamNumber: number;
  streamIds: number[],
}
