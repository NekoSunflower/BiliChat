import { Component, OnInit, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

const langs = ['en', 'zh', 'ja'];
const defaultLang = 'zh';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bilichat';

  constructor(private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    this.translate.addLangs(langs);
    this.translate.setDefaultLang(defaultLang);
    const language = this.getLang();
    if (langs.indexOf(language) > -1) {
      this.translate.use(language);
    } else {
      this.translate.use(defaultLang);
    }
  }

  public getLang(): string {
    // let lang: string;
    // if (isPlatformBrowser(this.platformId)) {
    //   lang = this.translate.getBrowserLang();
    // } else {
    //   lang = navigator.language.substring(0, 2); // 暂不考虑区域代码
    // }
    // return lang;
    return defaultLang;
  }

  public switchLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
