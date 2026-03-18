import { cn } from "@/lib/utils"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
  initial: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ author, text, href, className }: TestimonialCardProps) {
  const Card = href ? 'a' : 'div'

  return (
    <Card
      {...(href ? { href } : {})}
      className={cn(
        "flex flex-col rounded-2xl",
        "bg-[#f5f5f7] border border-black/[0.06]",
        "p-5 text-start",
        "hover:bg-white hover:shadow-[0_4px_32px_rgba(0,0,0,0.07)]",
        "w-[300px] shrink-0",
        "transition-all duration-300",
        className
      )}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-3.5 h-3.5 fill-[#1d1d1f]" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-[14px] text-[#1d1d1f] leading-relaxed mb-5 flex-1">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
        <Avatar className="h-9 w-9">
          <AvatarImage src={author.avatar} alt={author.name} />
          <AvatarFallback>{author.initial}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start min-w-0">
          <h3 className="text-[13px] font-semibold text-[#1d1d1f] leading-none truncate">
            {author.name}
          </h3>
          <p className="text-[12px] text-[#6e6e73] mt-0.5">
            {author.handle}
          </p>
        </div>
      </div>
    </Card>
  )
}
