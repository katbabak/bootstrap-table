import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  orders = [
    {
      fullName: 'Client01',
      userName: '0987654434',
      id: '001',
      orderTotal: 60,
      orderStatus: 'NEW',
      createdDate: '16/07/2018',
      orderPositions: [
        {
          farmerName: 'FArmer01',
          lotName: 'Meat',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'kg',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'New'
        },
        {
          farmerName: 'FArmer02',
          lotName: 'Apples',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'kg',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'Ref'
        },
        {
          farmerName: 'FArmer03',
          lotName: 'Milk',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'l',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'New'
        }
      ]
    },
    {
      fullName: 'Client02',
      userName: '098763r2234',
      id: '002',
      orderTotal: 234.00,
      orderStatus: 'Ref',
      createdDate: '16/07/2018',
      orderPositions: [
        {
          farmerName: 'FArmer01',
          lotName: 'Meat',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'kg',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'New'
        },
        {
          farmerName: 'FArmer02',
          lotName: 'Apples',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'kg',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'Ref'
        },
        {
          farmerName: 'FArmer03',
          lotName: 'Milk',
          initialAmount: 4,
          actualAmount: 4.5,
          amountUnitDescr: 'l',
          pricePerUnit: 120,
          total: 540,
          createdDate: '16/07/2018',
          status: 'New'
        }
      ]
    }];
}
