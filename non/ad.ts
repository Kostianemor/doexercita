
const {TransactionBlock} = require('@google-cloud/dataform');
const transactionBlock = new TransactionBlock();

const call = transactionBlock.addCall('call_id');
transactionBlock.addCall('call_id_2');
transactionBlock.moveCall({fromIndex: 1, toIndex: 0});

