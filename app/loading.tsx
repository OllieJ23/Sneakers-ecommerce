export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-b-8 border-t-8 border-lightBlue"></div>
        <div className="absolute left-0 top-0 h-24 w-24 animate-spin rounded-full border-b-8 border-t-8 border-orange"></div>
      </div>
    </div>
  );
}
