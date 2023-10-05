import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankingComponent]
    });
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`(U) getPoupanca(): should have poupanca = 10`, () => {
    expect(component.getPoupanca()).toEqual(10);
  });

  it(`(U) getCarteira(): should have carteira = 50`, () => {
    expect(component.getCarteira()).toEqual(50);
  });

  it(`(U) setSacar() should transfer poupanca to carteira`, () => {
    component.setSacar('10');

    expect(component.getPoupanca()).toEqual(0);
    expect(component.getCarteira()).toEqual(60);
  });

  it(`(U) setSacar(): value is not string (isNaN) or poupanca < value)`, () => {
    expect(component.setSacar('string')).not.toBeTruthy();
    expect(component.setSacar('100')).not.toBeTruthy();

    expect(component.getCarteira()).toEqual(50);
    expect(component.getPoupanca()).toEqual(10);
  });

  it(`(I) setSacar() should transfer poupanca to carteira`, () => {
    let el = fixture.debugElement.nativeElement;
    
    el.querySelector('#input-sacar').value = '10';
    el.querySelector('#sacar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-poupanca').textContent).toEqual('0');
  });

  it(`(U) setDepositar() should transfer carteira to poupanca`, () => {
    component.setDepositar('10');

    expect(component.getPoupanca()).toEqual(20);
    expect(component.getCarteira()).toEqual(40);
  });

  it(`(U) setDepositar(): value is not string (isNaN) or carteira < value)`, () => {
    expect(component.setDepositar('string')).not.toBeTruthy();
    expect(component.setDepositar('100')).not.toBeTruthy();

    expect(component.getCarteira()).toEqual(50);
    expect(component.getPoupanca()).toEqual(10);
  });

  it(`(I) setDepositar() should transfer carteira to poupanca`, () => {
    let el = fixture.debugElement.nativeElement;
    
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();
    fixture.detectChanges();

    expect(el.querySelector('#get-carteira').textContent).toEqual('40');
  });

});
