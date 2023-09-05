import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import ServerComponent from './server/server.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServiceComponent], // ให้ Angular รู้จักว่ามี Component อะไรบ้าง
  imports: [BrowserModule, FormsModule], // ใช้ import module อื่นๆ จาก outsource หรือจาก angular
  providers: [],
  bootstrap: [AppComponent], // ใช้บอก Component เริ่มต้น
})
export class AppModule {}
