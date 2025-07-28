import GlowingBackground from '@/components/glowing-background';

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50">
      <GlowingBackground />
    </div>
  );
}
