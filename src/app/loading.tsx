import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/50 backdrop-blur-sm">
      <LoadingSpinner />
    </div>
  );
}
