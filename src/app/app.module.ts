import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Component1Component } from "./component1/component1.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatCheckboxModule } from "@angular/material";

@NgModule({
  declarations: [AppComponent, Component1Component],
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
