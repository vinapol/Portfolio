import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ToastProvider } from "@/components/ui/Toast";
import { GridProvider } from "@/context/GridContext";

const BelowFold = lazy(() => import("@/components/BelowFold"));

export default function App() {
  return (
    <GridProvider>
      <ToastProvider>
        <Navbar />
        <main id="contenu-principal" className="page-main">
          <Hero />
          <Suspense fallback={<div className="below-fold-fallback" />}>
            <BelowFold />
          </Suspense>
        </main>
      </ToastProvider>
    </GridProvider>
  );
}
