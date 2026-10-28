/* Datos del menú. Editar aquí, no en js/menu.js.
   imagen: "archivo.webp" -> images/platos/archivo.webp. Sin imagen = placeholder ORYZO. */
const menuData = {
  categorias: [
    {
      id: "entradas",
      nombre: "DESDE LA COCINA",
      platos: [
        { id: "sopa-miso", nombre: "SOPA MISO", descripcion: "Caldo a base de pasta de soya con queso tofu, algas marinas y togarashi.", precio: 4.25, disponible: true, vegetariano: true, imagen: "sopa-miso.webp" },
        { id: "wakame-salad", nombre: "WAKAME SALAD", descripcion: "Ensalada de algas con especias y ajonjolí.", precio: 4.25, disponible: true, vegetariano: true, vegano: true, imagen: "wakame-salad.webp" },
        { id: "gyozas", nombre: "GYOZAS", descripcion: "5 unidades de empanaditas de trigo rellenas de cerdo, al vapor o fritas.", precio: 4.25, disponible: true, imagen: "gyozas.webp" },
        { id: "edamame", nombre: "EDAMAME", descripcion: "Vainita de soya preparada al vapor.", precio: 4.25, disponible: true, vegetariano: true, vegano: true, imagen: "edamame.webp" },
        { id: "ensalada-fresca", nombre: "ENSALADA FRESCA", descripcion: "Lechuga, rodaja de tomate, zanahoria y cebolla perla con salsa de jengibre.", precio: 4.25, disponible: true, vegetariano: true, imagen: "ensalada-fresca.webp" },
        { id: "portobelo", nombre: "PORTOBELLO", descripcion: "Vegetal adicional a la plancha.", precio: 3.75, disponible: true, vegetariano: true, vegano: true, imagen: "portobelo.webp" },
        { id: "champinon", nombre: "CHAMPIÑÓN", descripcion: "Vegetal adicional a la plancha.", precio: 3.25, disponible: true, vegetariano: true, vegano: true, imagen: "champinon.webp" },
        { id: "esparrago", nombre: "ESPÁRRAGO", descripcion: "Vegetal adicional a la plancha.", precio: 3.75, disponible: true, vegetariano: true, vegano: true, imagen: "esparrago.webp" },
        { id: "pimientos", nombre: "PIMIENTOS", descripcion: "Vegetal adicional a la plancha.", precio: 2.75, disponible: true, vegetariano: true, vegano: true, imagen: "pimientos.webp" },
        { id: "soya", nombre: "SOYA", descripcion: "Vegetal adicional a la plancha.", precio: 3.25, disponible: true, vegetariano: true, vegano: true, imagen: "soya.webp" },
        { id: "berenjena", nombre: "BERENJENA", descripcion: "Vegetal adicional a la plancha.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "berenjena.webp" },
        { id: "zucchini", nombre: "ZUCCHINI", descripcion: "Vegetal adicional a la plancha.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "zucchini.webp" },
        { id: "cebolla-perla", nombre: "CEBOLLA PERLA", descripcion: "Vegetal adicional a la plancha.", precio: 2.75, disponible: true, vegetariano: true, vegano: true, imagen: "cebolla-perla.webp" },
        { id: "brocoli", nombre: "BRÓCOLI", descripcion: "Vegetal adicional a la plancha.", precio: 2.75, disponible: true, vegetariano: true, vegano: true, imagen: "brocoli.webp" },
        { id: "tomate", nombre: "TOMATE", descripcion: "Vegetal adicional a la plancha.", precio: 2.5, disponible: true, vegetariano: true, vegano: true, imagen: "tomate.webp" },
        { id: "ajos-fritos", nombre: "AJOS FRITOS", descripcion: "Ajo en brunoise salteado a la plancha.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "ajos-fritos.webp" },
        { id: "nabo-chino", nombre: "NABO CHINO", descripcion: "Vegetal adicional a la plancha.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "nabo-chino.webp" },
        { id: "espinaca", nombre: "ESPINACA", descripcion: "Vegetal adicional a la plancha.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "espinaca.webp" }
      ]
    },
    {
      id: "carnes",
      nombre: "CARNES",
      platos: [
        { id: "imported-ribeye", nombre: "IMPORTED RIBEYE", descripcion: "450 g de carne marmoleada con ajos en salsa de soya, vegetales y arroz blanco.", precio: 18.5, disponible: true, imagen: "imported-ribeye.webp" },
        { id: "teriyaki-loin", nombre: "TERIYAKI LOIN", descripcion: "Lomo fino de res marinado en salsa teriyaki, vegetales y arroz blanco.", precio: 22.5, disponible: true, imagen: "teriyaki-loin.webp" },
        { id: "thin-loin", nombre: "THIN LOIN", descripcion: "Lomo fino de res marinado en salsa de soya, vegetales y arroz blanco.", precio: 65.99, disponible: true, imagen: "thin-loin.webp" },
        { id: "pork-ribeye", nombre: "PORK RIBEYE", descripcion: "Lomo de cerdo con hueso salteado con champiñones en teriyaki, vegetales y arroz blanco.", precio: 18.75, disponible: true, imagen: "pork-ribeye.webp" },
        { id: "pork-ribs", nombre: "PORK RIBS", descripcion: "Costillas de cerdo marinadas en salsa teriyaki, vegetales y arroz blanco.", precio: 25.5, disponible: true, imagen: "pork-ribs.webp" },
        { id: "rack-of-lamb", nombre: "RACK OF LAMB", descripcion: "Costillas de cordero marinadas en salsa de soya, vegetales y arroz blanco.", precio: 15.5, disponible: true, imagen: "rack-of-lamb.webp" },
        { id: "costilla-de-res", nombre: "COSTILLA DE RES", descripcion: "Lomo de costilla marinado en salsa de soya, vegetales y arroz blanco.", precio: 15.75, disponible: true, imagen: "costilla-de-res.webp" },
        { id: "teriyaki-chicken", nombre: "TERIYAKI CHICKEN", descripcion: "Pechuga de pollo marinada en salsa teriyaki, vegetales y arroz blanco.", precio: 14.25, disponible: true, imagen: "teriyaki-chicken.webp" }
      ]
    },
    {
      id: "pescados",
      nombre: "PESCADOS",
      platos: [
        { id: "teriyaki-salmon", nombre: "TERIYAKI SALMON", descripcion: "Lomo de salmón con salsa teriyaki, vegetales y arroz blanco.", precio: 18.75, disponible: true, imagen: "teriyaki-salmon.webp" },
        { id: "teriyaki-tuna", nombre: "TERIYAKI TUNA", descripcion: "Lomo de atún con salsa teriyaki, vegetales y arroz blanco.", precio: 16.5, disponible: true, imagen: "teriyaki-tuna.webp" },
        { id: "swordfish", nombre: "SWORDFISH", descripcion: "Lomo de pez espada con salsa teriyaki, vegetales y arroz blanco.", precio: 15.25, disponible: true, imagen: "swordfish.webp" },
        { id: "atun-al-limon", nombre: "ATÚN AL LIMÓN", descripcion: "Lomo de atún con salsa de limón y teriyaki, vegetales y arroz blanco.", precio: 25.5, disponible: true, imagen: "atun-al-limon.webp" }
      ]
    },
    {
      id: "mariscos",
      nombre: "MARISCOS",
      platos: [
        { id: "vieiras", nombre: "VIEIRAS", descripcion: "Scallops salteadas y cubiertas en salsa teriyaki, vegetales y arroz blanco.", precio: 35.75, disponible: true, imagen: "vieiras.webp" },
        { id: "prawns", nombre: "PRAWNS", descripcion: "4 langostinos marinados con vino blanco y salsa de soya, vegetales y arroz blanco.", precio: 22, disponible: true, imagen: "prawns.webp" },
        { id: "teriyaki-shrimp", nombre: "TERIYAKI SHRIMP", descripcion: "Camarones salteados con salsa teriyaki, vegetales y arroz blanco.", precio: 12.5, disponible: true, imagen: "teriyaki-shrimp.webp" },
        { id: "pulpo", nombre: "PULPO", descripcion: "Pulpo precocido marinado con ajo y salsa de soya, vegetales y arroz blanco.", precio: 22.75, disponible: true, imagen: "pulpo.webp" },
        { id: "calamar", nombre: "CALAMAR", descripcion: "Calamar marinado con ajo y salsa de soya, vegetales y arroz blanco.", precio: 12.25, disponible: true, imagen: "calamar.webp" }
      ]
    },
    {
      id: "arroces",
      nombre: "ARROCES",
      platos: [
        { id: "fried-rice-shrimp", nombre: "FRIED RICE CON CAMARÓN", descripcion: "Verduras en brunoise con huevo frito, camarón y arroz blanco marinado en soya.", precio: 14.5, disponible: true, imagen: "fried-rice-shrimp.webp" },
        { id: "fried-rice-squid", nombre: "FRIED RICE CON CALAMAR", descripcion: "Verduras en brunoise con huevo frito, calamar al ajo y arroz blanco marinado en soya.", precio: 20.5, disponible: true, imagen: "fried-rice-squid.webp" },
        { id: "fried-rice-loin-chicken", nombre: "FRIED RICE LOMO Y POLLO", descripcion: "Verduras en brunoise con huevo frito, lomo y pollo revueltos con arroz marinado en soya.", precio: 12.25, disponible: true, imagen: "fried-rice-loin-chicken.webp" },
        { id: "fried-rice-shrimp-squid", nombre: "FRIED RICE CAMARÓN Y CALAMAR", descripcion: "Ajo y verduras en brunoise con huevo frito, camarón y calamar sobre arroz marinado en soya.", precio: 16.5, disponible: true, imagen: "fried-rice-shrimp-squid.webp" },
        { id: "fried-rice-mariscos", nombre: "FRIED RICE MARISCOS", descripcion: "Ajo y verduras en brunoise con huevo frito y mariscos revueltos con arroz marinado en soya.", precio: 14.5, disponible: true, imagen: "fried-rice-mariscos.webp" },
        { id: "garlic-rice", nombre: "GARLIC RICE", descripcion: "Refrito de ajo en brunoise con arroz blanco marinado en salsa de soya.", precio: 10.5, disponible: true, vegetariano: true, vegano: true, imagen: "garlic-rice.webp" },
        { id: "fried-rice", nombre: "FRIED RICE", descripcion: "Refrito de verduras en brunoise con huevo frito y arroz blanco marinado en soya.", precio: 10.5, disponible: true, vegetariano: true, imagen: "fried-rice.webp" }
      ]
    },
    {
      id: "tallarines",
      nombre: "TALLARINES",
      platos: [
        { id: "ramen-miso", nombre: "RAMEN MISO", descripcion: "Caldo de hueso de cerdo y pasta de soja con fideos, cerdo, huevo cocido, algas y naruto.", precio: 6.5, disponible: true, imagen: "ramen-miso.webp" },
        { id: "ramen-shoyu", nombre: "RAMEN SHOYU", descripcion: "Caldo de hueso de cerdo con fideos, salsa shoyu, cerdo, huevo cocido, algas y naruto.", precio: 6.5, disponible: true, imagen: "ramen-shoyu.webp" },
        { id: "ramen-tonkotsu", nombre: "RAMEN TONKOTSU", descripcion: "Caldo de hueso de cerdo con fideos, salsa tonkotsu, cerdo, huevo cocido, algas y naruto.", precio: 6.5, disponible: true, imagen: "ramen-tonkotsu.webp" },
        { id: "tempura-udon", nombre: "TEMPURA UDÓN", descripcion: "Caldo de sake, mirín, salsa soya y togarashi con langostinos en tempura.", precio: 6.5, disponible: true, imagen: "tempura-udon.webp" },
        { id: "noodles-vegetales", nombre: "NOODLES CON VEGETALES", descripcion: "Tallarín salteado con vegetales y salsa de soya.", precio: 15.25, disponible: true, vegetariano: true, vegano: true, imagen: "noodles-vegetales.webp" },
        { id: "noodles-basico", nombre: "NOODLES", descripcion: "Tallarín salteado en la plancha y marinado con salsa de soya.", precio: 10.5, disponible: true, vegetariano: true, vegano: true, imagen: "noodles-basico.webp" },
        { id: "noodles-loin", nombre: "NOODLES CON LOMO", descripcion: "Tallarín con vegetales y lomo marinado en salsa de soya.", precio: 10.5, disponible: true, imagen: "noodles-loin.webp" },
        { id: "noodles-chicken", nombre: "NOODLES CON POLLO", descripcion: "Tallarín con vegetales y pollo en salsa teriyaki.", precio: 16.5, disponible: true, imagen: "noodles-chicken.webp" },
        { id: "noodles-shrimp", nombre: "NOODLES CON CAMARÓN", descripcion: "Tallarín con vegetales y camarón marinado en salsa de soya.", precio: 14.5, disponible: true, imagen: "noodles-shrimp.webp" },
        { id: "noodles-loin-chicken", nombre: "NOODLES LOMO Y POLLO", descripcion: "Tallarín con vegetales, lomo y pollo en salsa teriyaki.", precio: 14.75, disponible: true, imagen: "noodles-loin-chicken.webp" },
        { id: "noodles-loin-shrimp", nombre: "NOODLES LOMO Y CAMARÓN", descripcion: "Tallarín con vegetales, lomo y camarón marinado en salsa de soya.", precio: 16.25, disponible: true, imagen: "noodles-loin-shrimp.webp" },
        { id: "noodles-squid-shrimp", nombre: "NOODLES CALAMAR Y CAMARÓN", descripcion: "Tallarín con vegetales, calamar y camarón marinado en salsa de soya.", precio: 16.75, disponible: true, imagen: "noodles-squid-shrimp.webp" },
        { id: "noodles-trio", nombre: "NOODLES LOMO, POLLO Y CAMARÓN", descripcion: "Tallarín con vegetales, lomo, pollo y camarón en teriyaki o soya.", precio: 16.75, disponible: true, imagen: "noodles-trio.webp" }
      ]
    },
    {
      id: "combinaciones",
      nombre: "COMBINACIONES",
      platos: [
        { id: "loin-chicken", nombre: "LOMO Y POLLO", descripcion: "Lomo en salsa de soya y pollo en salsa teriyaki, vegetales y arroz blanco.", precio: 15.5, disponible: true, imagen: "loin-chicken.webp" },
        { id: "loin-shrimp", nombre: "LOMO Y CAMARÓN", descripcion: "Lomo y camarón marinados en salsa de soya, vegetales y arroz blanco.", precio: 15.75, disponible: true, imagen: "loin-shrimp.webp" },
        { id: "loin-salmon", nombre: "LOMO Y SALMÓN", descripcion: "Salmón en teriyaki y lomo en soya, vegetales y arroz blanco.", precio: 21.75, disponible: true, imagen: "loin-salmon.webp" },
        { id: "loin-prawns", nombre: "LOMO Y LANGOSTINOS", descripcion: "Lomo fino en soya y langostinos al vino blanco, vegetales y arroz blanco.", precio: 22.75, disponible: true, imagen: "loin-prawns.webp" },
        { id: "loin-shrimp-chicken", nombre: "LOMO, CAMARÓN Y POLLO", descripcion: "Lomo y camarón en soya con pollo en teriyaki, vegetales y arroz blanco.", precio: 15.75, disponible: true, imagen: "loin-shrimp-chicken.webp" },
        { id: "loin-shrimp-salmon", nombre: "LOMO, CAMARÓN Y SALMÓN", descripcion: "Lomo y camarón en soya con salmón en teriyaki, vegetales y arroz blanco.", precio: 18.75, disponible: true, imagen: "loin-shrimp-salmon.webp" },
        { id: "loin-chicken-salmon", nombre: "LOMO, POLLO Y SALMÓN", descripcion: "Lomo en soya con pollo y salmón en teriyaki, vegetales y arroz blanco.", precio: 21.5, disponible: true, imagen: "loin-chicken-salmon.webp" },
        { id: "plato-vegetariano", nombre: "PLATO VEGETARIANO", descripcion: "Vegetales salteados: pack choi, cebolla perla, pimientos, zucchini, berenjena, champiñones, espinaca, brócoli, espárragos, zanahoria y portobello.", precio: 10.5, disponible: true, vegetariano: true, vegano: true, imagen: "plato-vegetariano.webp" },
        { id: "menu-completo-1", nombre: "MENÚ COMPLETO 1", descripcion: "Lomo y pollo, arroz frito, brócoli y zucchini, banana y fresa, copa de sangría.", precio: 20.5, disponible: true, imagen: "menu-completo-1.webp" },
        { id: "menu-completo-2", nombre: "MENÚ COMPLETO 2", descripcion: "Camarón y lomo, arroz frito, cebolla y nabo, banana y fresa, copa de sangría.", precio: 22.25, disponible: true, imagen: "menu-completo-2.webp" },
        { id: "menu-completo-3", nombre: "MENÚ COMPLETO 3", descripcion: "Lomo y pollo, salmón, arroz frito, sopa miso, champiñones, mango y banana, copa de sangría.", precio: 29.5, disponible: true, imagen: "menu-completo-3.webp" },
        { id: "menu-completo-4", nombre: "MENÚ COMPLETO 4", descripcion: "Lomo y langostinos, pulpo, arroz frito, ramen, cebolla, mango y pera, copa de sangría.", precio: 34.99, disponible: true, imagen: "menu-completo-4.webp" }
      ]
    },
    {
      id: "sushi",
      nombre: "SUSHI",
      platos: [
        { id: "philadelphia-roll", nombre: "PHILADELPHIA ROLL", descripcion: "Relleno de salmón y queso crema, cobertura de alga nori.", precio: 6, disponible: true, imagen: "philadelphia-roll.webp" },
        { id: "tempura-roll", nombre: "TEMPURA ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto con panko.", precio: 6, disponible: true, imagen: "tempura-roll.webp" },
        { id: "ajonjoli-roll", nombre: "AJONJOLÍ ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto de ajonjolí.", precio: 6, disponible: true, imagen: "ajonjoli-roll.webp" },
        { id: "avocado-roll", nombre: "AVOCADO ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto de aguacate y ajonjolí.", precio: 6, disponible: true, imagen: "avocado-roll.webp" },
        { id: "oishiku-roll", nombre: "OISHIKU ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto de wakame.", precio: 6, disponible: true, imagen: "oishiku-roll.webp" },
        { id: "nori-maki-roll", nombre: "NORI MAKI ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cobertura de alga nori.", precio: 6, disponible: true, imagen: "nori-maki-roll.webp" },
        { id: "oromaki", nombre: "OROMAKI", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto con planchas de omelette.", precio: 6, disponible: true, imagen: "oromaki.webp" },
        { id: "maqueno-roll", nombre: "MAQUEÑO ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto con maqueño, sal prieta y surimi.", precio: 6, disponible: true, imagen: "maqueno-roll.webp" },
        { id: "cevichado-roll", nombre: "CEVICHADO ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cobertura de ceviche.", precio: 6, disponible: true, imagen: "cevichado-roll.webp" },
        { id: "mango-roll", nombre: "MANGO ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto con mango, pulpo, caviar y mayonesa.", precio: 6, disponible: true, imagen: "mango-roll.webp" },
        { id: "california-roll", nombre: "CALIFORNIA ROLL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto de caviar.", precio: 6, disponible: true, imagen: "california-roll.webp" },
        { id: "california-especial", nombre: "CALIFORNIA ESPECIAL", descripcion: "Mariscos a elección, aguacate y queso crema, cubierto de wakame, surimi y caviar.", precio: 6, disponible: true, imagen: "california-especial.webp" },
        { id: "taberu-especial", nombre: "TABERU ESPECIAL", descripcion: "Salmón, aguacate y queso crema, cubierto de aguacate y caviar.", precio: 6, disponible: true, imagen: "taberu-especial.webp" },
        { id: "futopanko", nombre: "FUTOPANKO", descripcion: "Aguacate, queso crema y langostinos tempura fritos con panko.", precio: 6, disponible: true, imagen: "futopanko.webp" },
        { id: "futomaki", nombre: "FUTOMAKI", descripcion: "Dos mariscos a elección, aguacate y queso crema, cobertura de alga nori.", precio: 6, disponible: true, imagen: "futomaki.webp" },
        { id: "langostinos-roll", nombre: "LANGOSTINOS ROLL", descripcion: "Camarón y cebollín picado mezclado con queso crema y mayonesa.", precio: 6, disponible: true, imagen: "langostinos-roll.webp" },
        { id: "tekkamaki", nombre: "TEKKAMAKI", descripcion: "Roll de atún.", precio: 4.5, disponible: true, imagen: "tekkamaki.webp" },
        { id: "kappamaki", nombre: "KAPPAMAKI", descripcion: "Roll de pepino.", precio: 4.5, disponible: true, vegetariano: true, vegano: true, imagen: "kappamaki.webp" },
        { id: "nigiri-carta", nombre: "NIGIRI A LA CARTA", descripcion: "Una unidad: camarón, kani, pulpo, salmón, atún o masago.", precio: 2, disponible: true, imagen: "nigiri-carta.webp" },
        { id: "nigiri-variados", nombre: "NIGIRI VARIADOS", descripcion: "12 unidades surtidas de nigiri.", precio: 15, disponible: true, imagen: "nigiri-variados.webp" },
        { id: "sashimi-variado", nombre: "SASHIMI VARIADO", descripcion: "Selección de cortes de pescado fresco.", precio: 18, disponible: true, imagen: "sashimi-variado.webp" },
        { id: "sashimi-especial", nombre: "SASHIMI ESPECIAL", descripcion: "Selección ampliada de cortes de pescado fresco.", precio: 20, disponible: true, imagen: "sashimi-especial.webp" },
        { id: "cono-temaki", nombre: "1 CONO TEMAKI", descripcion: "Cono de alga relleno a elección.", precio: 5, disponible: true, imagen: "cono-temaki.webp" },
        { id: "conos-temakis", nombre: "3 CONOS TEMAKIS", descripcion: "Tres conos de alga rellenos a elección.", precio: 10.5, disponible: true, imagen: "conos-temakis.webp" },
        { id: "langostinos-tempura", nombre: "6 LANGOSTINOS TEMPURA", descripcion: "Langostinos empanizados en tempura.", precio: 5, disponible: true, imagen: "langostinos-tempura.webp" },
        { id: "bocados-20", nombre: "20 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 11.25, disponible: true, imagen: "bocados-20.webp" },
        { id: "bocados-25", nombre: "25 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 13, disponible: true, imagen: "bocados-25.webp" },
        { id: "bocados-30", nombre: "30 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 17.5, disponible: true, imagen: "bocados-30.webp" },
        { id: "bocados-40", nombre: "40 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 22.5, disponible: true, imagen: "bocados-40.webp" },
        { id: "bocados-50", nombre: "50 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 27.5, disponible: true, imagen: "bocados-50.webp" },
        { id: "bocados-60", nombre: "60 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 32.75, disponible: true, imagen: "bocados-60.webp" },
        { id: "bocados-70", nombre: "70 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 37.5, disponible: true, imagen: "bocados-70.webp" },
        { id: "bocados-80", nombre: "80 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 42.75, disponible: true, imagen: "bocados-80.webp" },
        { id: "bocados-90", nombre: "90 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 47.5, disponible: true, imagen: "bocados-90.webp" },
        { id: "bocados-100", nombre: "100 BOCADOS VARIADOS", descripcion: "Surtido de bocados de sushi a elección.", precio: 53.25, disponible: true, imagen: "bocados-100.webp" }
      ]
    },
    {
      id: "bebidas",
      nombre: "BEBIDAS",
      platos: [
        { id: "gaseosas", nombre: "GASEOSAS", descripcion: "Bebida gaseosa a elección.", precio: 1.75, disponible: true, vegetariano: true, vegano: true, imagen: "gaseosas.webp" },
        { id: "limonada", nombre: "LIMONADA", descripcion: "Jugo de limón natural.", precio: 1.5, disponible: true, vegetariano: true, vegano: true, imagen: "limonada.webp" },
        { id: "limonada-imperial", nombre: "LIMONADA IMPERIAL", descripcion: "Limonada de la casa.", precio: 1.25, disponible: true, vegetariano: true, vegano: true, imagen: "limonada-imperial.webp" },
        { id: "aguas", nombre: "AGUAS", descripcion: "Agua con o sin gas.", precio: 1.5, disponible: true, vegetariano: true, vegano: true, imagen: "aguas.webp" },
        { id: "fuze-tea", nombre: "FUZE TEA", descripcion: "Té frío a elección.", precio: 1.5, disponible: true, vegetariano: true, vegano: true, imagen: "fuze-tea.webp" },
        { id: "sapporo", nombre: "CERVEZA SAPPORO", descripcion: "Cerveza japonesa.", precio: 2.5, disponible: true, imagen: "sapporo.webp" },
        { id: "club-verde", nombre: "CERVEZA CLUB VERDE", descripcion: "Cerveza Club Verde.", precio: 8.5, disponible: true, imagen: "club-verde.webp" },
        { id: "pilsener", nombre: "CERVEZA PILSENER", descripcion: "Cerveza Pilsener.", precio: 4.5, disponible: true, imagen: "pilsener.webp" },
        { id: "corona", nombre: "CERVEZA CORONA", descripcion: "Cerveza Corona.", precio: 2.5, disponible: true, imagen: "corona.webp" },
        { id: "micheladas", nombre: "MICHELADAS", descripcion: "Cerveza preparada con limón y sal.", precio: 4, disponible: true, imagen: "micheladas.webp" },
        { id: "sake-220", nombre: "SAKE BOTELLA 220 ML", descripcion: "Sake frío para compartir.", precio: 18.25, disponible: true, imagen: "sake-220.webp" },
        { id: "sake-caliente", nombre: "SAKE CALIENTE", descripcion: "Sake servido caliente.", precio: 19.5, disponible: true, imagen: "sake-caliente.webp" },
        { id: "sake-frio", nombre: "SAKE FRÍO", descripcion: "Sake servido frío.", precio: 18.5, disponible: true, imagen: "sake-frio.webp" },
        { id: "shock-sake", nombre: "SHOCK DE SAKE", descripcion: "Shot de sake.", precio: 4, disponible: true, imagen: "shock-sake.webp" },
        { id: "copa-tinto", nombre: "COPA DE VINO TINTO", descripcion: "Copa de vino tinto de la casa.", precio: 3.75, disponible: true, imagen: "copa-tinto.webp" },
        { id: "copa-blanco", nombre: "COPA DE VINO BLANCO", descripcion: "Copa de vino blanco de la casa.", precio: 3.75, disponible: true, imagen: "copa-blanco.webp" },
        { id: "sangria", nombre: "COPA DE SANGRÍA", descripcion: "Sangría de la casa.", precio: 3.75, disponible: true, imagen: "sangria.webp" },
        { id: "cardos-malbec", nombre: "BOTELLA CARDOS MALBEC", descripcion: "Vino tinto Malbec.", precio: 35.5, disponible: true, imagen: "cardos-malbec.webp" },
        { id: "cavanza-carmenere", nombre: "BOTELLA CAVANZA CARMENERE", descripcion: "Vino tinto Carmenere.", precio: 30.5, disponible: true, imagen: "cavanza-carmenere.webp" },
        { id: "calvet-merlot", nombre: "BOTELLA CALVET MERLOT", descripcion: "Vino tinto Merlot.", precio: 30.5, disponible: true, imagen: "calvet-merlot.webp" },
        { id: "sauvignon-black", nombre: "BOTELLA SAUVIGNON BLACK", descripcion: "Vino blanco Sauvignon Blanc.", precio: 26.75, disponible: true, imagen: "sauvignon-black.webp" }
      ]
    },
    {
      id: "postres",
      nombre: "POSTRES",
      platos: [
        { id: "banana", nombre: "BANANA", descripcion: "Banana a la plancha flameada con miel, helado de la casa y jalea a elección.", precio: 4, disponible: true, vegetariano: true, imagen: "banana.webp" },
        { id: "fresas", nombre: "FRESAS", descripcion: "Fresas a la plancha flameadas con miel, helado de la casa y jalea a elección.", precio: 4, disponible: true, vegetariano: true, imagen: "fresas.webp" },
        { id: "banana-fresas", nombre: "BANANA CON FRESAS", descripcion: "Banana y fresas a la plancha con miel, helado de la casa y jalea a elección.", precio: 5, disponible: true, vegetariano: true, imagen: "banana-fresas.webp" },
        { id: "pina-pera", nombre: "PIÑA CON PERA", descripcion: "Piña y pera a la plancha con miel, helado de la casa y jalea a elección.", precio: 5, disponible: true, vegetariano: true, imagen: "pina-pera.webp" },
        { id: "pancake-helado", nombre: "PANCAKE CON HELADO", descripcion: "Pancake con helado de la casa y jalea a elección.", precio: 4.5, disponible: true, vegetariano: true, imagen: "pancake-helado.webp" },
        { id: "pancake-mango-fresa", nombre: "PANCAKE CON MANGO Y FRESA", descripcion: "Pancake con mango, fresa, helado de la casa y jalea a elección.", precio: 5, disponible: true, vegetariano: true, imagen: "pancake-mango-fresa.webp" }
      ]
    }
  ]
};
