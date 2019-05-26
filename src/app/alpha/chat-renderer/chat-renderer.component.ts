import { Component, OnInit, Input, Inject , PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IMessage, DanmakuMessage } from '../../../app/danmaku.def';

@Component({
  selector: 'yt-live-chat-renderer',
  templateUrl: './chat-renderer.component.html',
  styleUrls: ['./chat-renderer.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ChatRendererComponent implements OnInit {

  danmakuList: Array<IMessage>;

  waitForRendering: Array<IMessage>;

  groupSimilarCache: Array<DanmakuMessage>;

  @Input() public maxDammakuNum = 100;

  @Input() public displayMode = 3;

  @Input() public groupSimilar = true;

  @Output() public onawake: EventEmitter<any>;

  @Input() public groupSimilarWindow = 5;

  constructor(@Inject(PLATFORM_ID) private plat: Object) {
    this.danmakuList = [];
    this.waitForRendering = [];
    this.groupSimilarCache = [];
    this.onawake = new EventEmitter();
  }

  private lastRenderInvoke: number;
  private lastRenderPush: number;

  onFrame() {
    while (this.waitForRendering.length > 0) {
      this.danmakuList.push(this.waitForRendering.shift());
      while (this.danmakuList.length > this.maxDammakuNum) {
        this.danmakuList.shift();
      }
    }
    setTimeout(this.onFrame.bind(this), 1000);
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.plat)) {
      return;
    }
    requestAnimationFrame(this.awake.bind(this));
  }

  awake() {
    this.onawake.emit();

    this.lastRenderInvoke = Date.now();
    this.lastRenderPush = Date.now();
    requestAnimationFrame(this.onFrame.bind(this));
  }

  public sendSystemInfo(msg: string, force: boolean = false) {
    this.sendDanmaku(new DanmakuMessage(
      -1,
      'BILICHAT',
      msg,
      0,
      true,
      undefined,
      'assets/logo_icon.png'
    ), force);
  }

  public sendDanmaku(msg: IMessage, force: boolean = false) {
    if ((this.displayMode & <number>msg.mode) === 0 && msg.uid !== -1) {
      return;
    }
    if (msg.type === 'danmaku' && msg.uid > 0) {
      for (const c of this.groupSimilarCache) {
        if (this.groupSimilar
          && (c.message.indexOf((<DanmakuMessage>msg).message) !== -1 || (<DanmakuMessage>msg).message.indexOf(c.message) !== -1)
          && (Math.abs(c.message.length - (<DanmakuMessage>msg).message.length) < Math.min(c.message.length, (<DanmakuMessage>msg).message.length))
        ) {
          c.repeat++;
          return; // 如果存在相似元素,会在这里被截断
        }
      }
      this.groupSimilarCache.unshift(<DanmakuMessage>msg);
      while (this.groupSimilarCache.length > this.groupSimilarWindow) {
        this.groupSimilarCache.pop();
      }
    }
    if (force) {
      this.danmakuList.push(msg);
    } else {
      this.waitForRendering.push(msg);
    }
  }
}
