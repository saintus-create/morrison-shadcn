export function RootComponents() {
  return (
    <div className="theme-container mx-auto grid gap-8 py-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 2xl:gap-8">
      <div className="flex flex-col gap-6 *:[div]:w-full *:[div]:max-w-full">
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold mb-2">Component Examples</h3>
          <p className="text-sm text-muted-foreground">This is where the component demonstrations would appear.</p>
        </div>
      </div>
    </div>
  )
}