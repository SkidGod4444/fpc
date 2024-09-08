import FPCalc from "@/components/ui/fpc/calc";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full w-full overflow-hidden">
      <div className="absolute -z-50 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
      <div className="flex z-100 max-h-full max-w-full items-center justify-center p-4 md:p-6">
      <FPCalc />
      </div>
    </div>
  );
}
