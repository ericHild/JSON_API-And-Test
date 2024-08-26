import { DebugElement } from "@angular/core";
import { AppComponent } from "./app.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { JsondataService } from "./services/jsondata.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [JsondataService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Jsonplaceholder + Jest + Cypress' `, () => {
    const expected_value = 'Jsonplaceholder + Jest + Cypress';
    let title = component.title;
    expect(title).toEqual(expected_value);
  });

  it(`should have <h1> tag to display the text 'Jsonplaceholder + Jest + Cypress'`, () => {
    const tagDe:DebugElement = fixture.debugElement;
    const tagElement = tagDe.query(By.css('#appTitleName')).nativeElement;
    const tagText = tagElement.innerHTML;
    expect(tagText).toEqual('Jsonplaceholder + Jest + Cypress');
  });

  it(`should have a button with the text 'Get JSON Data'`, () => {
    const buttonDe:DebugElement = fixture.debugElement;
    const buttonElement: HTMLButtonElement = buttonDe.query(By.css('#getData')).nativeElement;
    const buttontext = buttonElement.innerHTML;
    expect(buttontext).toEqual('get data');
  });

  it(`should called getJSONData() after button cliked'`, () => {
    const spy = jest.spyOn(AppComponent.prototype, 'getPosts');

    const buttonDe:DebugElement = fixture.debugElement;
    const buttonElement: HTMLButtonElement = buttonDe.query(By.css('#getData')).nativeElement;
    buttonElement.click();

    expect(spy).toHaveBeenCalled();
  });

  it(`should called getDatas() after getJSONData() is call'`, () => {
    const spy = jest.spyOn(JsondataService.prototype, 'getPosts');

    fixture.componentInstance.getPosts();

    expect(spy).toHaveBeenCalled();
  });

  it('should contain a container to display data list', () => {
    const debugEl: DebugElement = fixture.debugElement;
    const list: HTMLDivElement = debugEl.query(By.css('#listOfResults')).nativeElement;
    expect(list).not.toBeNull();
  });

});
