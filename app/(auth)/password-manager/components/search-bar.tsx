import { useId } from 'react';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search in all items...' }: { placeholder?: string }) {
  const id = useId();
  return (
    <div className="relative w-full max-w-xs">
      <Input
        id={`input-${id}`}
        type="search"
        placeholder={placeholder}
        className="peer h-10 w-full rounded-xl ps-9 pe-3 shadow-sm"
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-muted-foreground/70">
        <SearchIcon size={18} />
      </div>
    </div>
  )
}