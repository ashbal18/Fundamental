class FoodOrderQueue {
    private queue: string[] = [];
  
    enqueue(order: string): void {
      this.queue.push(order);
      console.log(`Pesanan '${order}' ditambahkan ke antrian.`);
    }
  
    async processQueue(): Promise<void> {
      while (this.queue.length > 0) {
        const order = this.queue.shift(); 
        if (order) {
          const processingTime = Math.floor(Math.random() * 10) + 1; 
          console.log(`Memproses pesanan '${order}'... (membutuhkan ${processingTime} menit)`);
          
          await new Promise(resolve => setTimeout(resolve, processingTime * 1000)); 
          console.log(`Pesanan '${order}' selesai.`);
        }
      }
    }
  
    isEmpty(): boolean {
      return this.queue.length === 0;
    }
  }
  
  export default FoodOrderQueue;