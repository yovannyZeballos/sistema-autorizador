import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import { SortDirection } from '@angular/material/sort';
import { employee, employeeList } from './employeeListTableData';
import { employeeSortColumn } from 'src/app/shared/directives/sortable.directive';

interface SearchResult {
  employeeData: employeeList[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: employeeSortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: string | number, v2: string | number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(employeeData: employeeList[], column: employeeSortColumn, direction: string): employeeList[] {
  if (direction === '' || column === '') {
    return employeeData;
  } else {
    return [...employeeData].sort((a:any, b:any) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(employee: employeeList, term: string, pipe: PipeTransform) {
  return employee.EmpName.toLowerCase().includes(term.toLowerCase())
    || employee.EmpID.toLowerCase().includes(term.toLowerCase())
    || employee.Department.toLowerCase().includes(term.toLowerCase())
    || employee.Designation.toLowerCase().includes(term.toLowerCase())
    || employee.PhoneNumber.toLowerCase().includes(term.toLowerCase())
    || employee.JoinDate.toLowerCase().includes(term.toLowerCase())
    || employee.AtWork.toLowerCase().includes(term.toLowerCase())
}

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _employeeData$ = new BehaviorSubject<employeeList[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 10,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._employeeData$.next(result.employeeData);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get employeeData$() { return this._employeeData$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: employeeSortColumn) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let employeeData = sort(employee, sortColumn, sortDirection);

    // 2. filter
    employeeData = employeeData.filter(employee => matches(employee, searchTerm, this.pipe));
    const total = employeeData.length;

    // 3. paginate
    employeeData = employeeData.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({employeeData, total});
  }
}
