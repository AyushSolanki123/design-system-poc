import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PreviewedComponentComponent } from './component/previewed-component/previewed-component.component';
import { ComponentPreviewComponent } from './component/component-preview/component-preview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { ComponentWrapperComponent } from './component/component-wrapper/component-wrapper.component';
import { SearchInputComponent } from './component/preview/search-input/search-input.component';
import { ButtonComponent } from './component/preview/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PreviewedComponentComponent,
    ComponentPreviewComponent,
    ComponentWrapperComponent,
    SearchInputComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    NgbModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
