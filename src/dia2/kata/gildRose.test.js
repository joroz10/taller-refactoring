const { Shop, Item } = require("./gildRose");

describe("updateQuality", () => {
    it("Baja la calidad al avanzar la fecha", () => {
      const shop = new Shop([new Item("Elixir of the Mongoose", 10, 20)]);
      
      shop.updateQuality();
      
      expect(shop.items[0].quality).toBe(19);
    });
    it("Baja la fecha de venta al actualizar", () => {
      const shop = new Shop([new Item("Elixir of the Mongoose", 10, 20)]);
      
      shop.updateQuality();
      
      expect(shop.items[0].sellIn).toBe(9);
    });
    it("Baja la calidad en 2 puntos cuando se actualiza la fecha, una vez pasada la fehca de venta, al avanzar la fecha", () => {
        const shop = new Shop([new Item("Elixir of the Mongoose", 0, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(18);
      });
      it("Sube la calidad del queso brie al avanzar la fecha", () => {
        const shop = new Shop([new Item("Aged Brie", 10, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(21);
      });
      it("Sube la calidad del queso brie en 2 puntos, una vez pasada la fehca de venta, al avanzar la fecha", () => {
        const shop = new Shop([new Item("Aged Brie", 0, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(22);
      });
      it("La calidad nunca supera 50", () => {
        const shop = new Shop([new Item("Aged Brie", 10, 49)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(50);
      });
      it("Sulfuras no modifica su calidad", () => {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(80);
      });
      it("Sulfuras no modifica su fecha de venta", () => {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 80)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].sellIn).toBe(1);
      });
      it("Sube la calidad del pase backstage al avanzar la fecha", () => {
        const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(21);
      });
      it("Sube la calidad del pase backstage, 2 puntos cuando queda 10 dias o menos, al avanzar la fecha", () => {
        const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(22);
      });
      it("Sube la calidad del pase backstage, 3 puntos cuando queda 5 dias o menos, al avanzar la fecha", () => {
        const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(23);
      });
      it("La calidad del pase backstage baja a cero cuando pasa la fecha de venta", () => {
        const shop = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
        
        shop.updateQuality();
        
        expect(shop.items[0].quality).toBe(0);
      });
  });