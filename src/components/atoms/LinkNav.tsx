import Link from "next/link";

interface LinknavProps {
  href: string
  children: React.ReactNode
}

export default function LinkNav({children,href}:LinknavProps){
  return <Link href={href} className="
  flex h-14 px-14 text-white font-semibold text-base rounded-bl-lg rounded-br-lg items-center justify-center 
  w-[240px]
  transition-all 
  hover:bg-primary hover:o cursor-pointer
  relative 
      before:content-['']
      before:absolute 
      before:w-[100%] 
      before:h-[4px] 
      before:rounded 
      before:bg-white
      before:bottom-0
      before:left-0
      before:origin-left
      before:scale-x-[0]
      before:transition-transform
      before:ease-in-out
      hover:before:transition-transform
      hover:before:origin-left
      hover:before:scale-x-[1]">
        {children}
      </Link>
}
