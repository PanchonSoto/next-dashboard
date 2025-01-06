import { CartCounter } from "@/shopping-cart/components";


export const metadata = {
  title: "Counter",
  description: "Counter page",
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <span className="text-md font-bold text-slate-900">Productos en el carrito</span>
      <CartCounter />
    </div>
  );
}
