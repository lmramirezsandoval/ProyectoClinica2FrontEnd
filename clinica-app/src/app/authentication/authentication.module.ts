import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './service/authentication.service';
import { NgModule } from '@angular/core';
import { DefaultStorageService } from './service/default-storage.service';
export { AuthenticationService } from './service/authentication.service';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [AuthenticationService, HttpClientModule, { provide: 'IStorageService', useClass: DefaultStorageService }]
})
export class AuthenticationModule {}
