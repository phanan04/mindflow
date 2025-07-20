export const LayoutContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col lg:container lg:mx-auto px-4">
    {children}
  </div>
);
