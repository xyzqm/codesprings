export default function Home() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">CodeSprings</h1>
        <p className="text-xl font-medium mt-6 max-w-2xl">
          By providing both high-quality programming lessons and requisite
          resources for free, we empower underprivileged youth across the world
          to foster innovation and create pathways to brighter futures.
        </p>
      </div>
      <div className="h-screen outline bg-neutral-50 px-20 py-20">
        <h1 className="text-6xl font-bold" id="about">
          About Us
        </h1>
        <p className="text-xl font-medium mt-6 max-w-2xl">Coming soon...</p>
      </div>
    </div>
  );
}
