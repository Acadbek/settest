import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('65b7ad8b730d2670116c');

export const account = new Account(client);
export { ID } from 'appwrite';
  