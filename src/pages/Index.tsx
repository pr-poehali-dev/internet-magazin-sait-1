import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  title: string;
  price: number;
  category: string;
}

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products: any[] = [];

  const addToCart = (product: typeof products[0]) => {
    setCartItems(prev => [...prev, {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category
    }]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const categories: string[] = [];
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="ShoppingBag" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ShopPro</h1>
                <p className="text-sm text-gray-600">Интернет-магазин товаров премиум-класса</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#catalog" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>

            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="relative">
                  <Icon name="ShoppingCart" size={20} />
                  {cartItems.length > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                      {cartItems.length}
                    </Badge>
                  )}
                  <span className="ml-2 hidden sm:inline">Корзина</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Корзина</SheetTitle>
                  <SheetDescription>
                    {cartItems.length === 0 ? "Ваша корзина пуста" : `${cartItems.length} товара(ов) в корзине`}
                  </SheetDescription>
                </SheetHeader>
                
                <div className="space-y-4 mt-6">
                  {cartItems.map((item) => (
                    <Card key={`${item.id}-${Math.random()}`} className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.category}</p>
                          <p className="font-bold text-primary">{item.price} ₽</p>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <Icon name="Trash2" size={16} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                  
                  {cartItems.length > 0 && (
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span>{totalPrice} ₽</span>
                      </div>
                      <Button className="w-full mt-4" size="lg">
                        Оформить заказ
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Лучшие товары
              <span className="text-primary block">для вас</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Широкий ассортимент качественных товаров с доставкой по всей России. 
              Гарантия качества и лучшие цены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Zap" size={20} className="mr-2" />
                Выбрать товар
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" size={20} className="mr-2" />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Все товары проходят строгий контроль качества</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставка по России в течение 1-3 рабочих дней</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Круглосуточная поддержка клиентов и консультации</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-xl text-gray-600">Выберите то, что подходит именно вам</p>
          </div>

          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Package" size={32} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Товары скоро появятся</h3>
              <p className="text-gray-600">Мы работаем над наполнением каталога. Следите за обновлениями!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="ShoppingBag" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">ShopPro</span>
              </div>
              <p className="text-gray-400">
                Ведущий интернет-магазин товаров премиум-класса в России
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Категории</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Электроника</li>
                <li>Одежда и обувь</li>
                <li>Дом и сад</li>
                <li>Аксессуары</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Помощь</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Доставка и оплата</li>
                <li>Возврат товара</li>
                <li>Гарантия</li>
                <li>Связаться с нами</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="Send" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="Youtube" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                  <Icon name="Instagram" size={16} />
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Следите за новостями и специальными предложениями
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;