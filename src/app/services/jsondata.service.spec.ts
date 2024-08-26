import { TestBed } from '@angular/core/testing';

import { JsondataService } from './jsondata.service';

import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Post } from '../models/post';
import { take } from 'rxjs';

describe('JsondataService', () => {

  let service: JsondataService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: []
    });
  });

  beforeEach((): void => {
    service = TestBed.inject(JsondataService);
    controller = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
