// app/components/ThemeToggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react'; // lucide-react se instala con shadcn
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect solo se ejecuta en el cliente, después de que el componente se monta
  React.useEffect(() => {
    setMounted(true);
  },);

  // Hasta que no esté montado, no renderizamos el botón real para evitar mismatch
  if (!mounted) {
    // Renderiza un placeholder del mismo tamaño
    return <Button variant="outline" size="icon" disabled={true} />; 
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-9 h-9" // Tamaño de ícono estándar
      onClick={() => setTheme(isDark? 'light' : 'dark')}
      aria-label={isDark? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {isDark? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}