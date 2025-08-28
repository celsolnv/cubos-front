import clsx from "clsx";

export function Footer({ isFixed = false }: { isFixed?: boolean }) {
  return (
    <footer
      className={clsx(
        "w-full flex justify-center items-center border-t-1 py-2 border-mauve-6 h-[80px] bg-background",
        isFixed && "fixed bottom-0 left-0 right-0 z-50",
        !isFixed && "relative mt-auto pt-8",
      )}
    >
      <span className="text-base text-center text-primary-foreground">
        2025 © Todos os direitos reservados a <strong>Cubos Movies</strong>
      </span>
    </footer>
  );
}
