import FoodOrderQueue from './queue-handler';

async function main(): Promise<void> {
  const orderQueue = new FoodOrderQueue();

  orderQueue.enqueue("Nasi Goreng");
  orderQueue.enqueue("Sate Ayam");
  orderQueue.enqueue("Gado-Gado");
  orderQueue.enqueue("Mie Goreng");

  console.log("Memulai pemrosesan pesanan...");
  await orderQueue.processQueue(); 
  console.log("Semua pesanan telah diproses.");
}

main();