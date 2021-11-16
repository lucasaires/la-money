import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    transactions: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title: 'Freelance Web',
          category: 'Dev',
          type:'deposit',
          amount: 6000,
          createdAt: new Date('2021-09-07 12:08:00' )
        }, 
        {
          id:2,
          title: 'Aluguel',
          category: 'Casa',
          type:'withdraw',
          amount: 1100,
          createdAt: new Date('2021-09-07 12:08:00' )
        }
      ]
    })
  },
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () =>{
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transactions',data);

    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

