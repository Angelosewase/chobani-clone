import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export function Footer() {
  return (
    <footer className="bg-[#1a3c34] text-white">
      <div className=" px-12 py-12">
        <div className="flex justify-between gap-8 mb-8">
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">
              Get the freshest Chobani news
            </h3>
            <div className="flex gap-0 mb-4 max-w-[400px]">
              <Input
                type="email"
                placeholder="Enter email here"
                className="bg-transparent rounded-none border-0 border-b border-b-white/30 text-white placeholder:text-white/70 focus:border-b-white focus:outline-none"
              />
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2d5a5a] whitespace-nowrap bg-transparent border-0  border-b border-b-white/30 focus:border-b-white focus:outline-none rounded-none font-semibold"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex items-start gap-2">
              <Checkbox
                id="age-verification"
                className="mt-1 border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-[#2d5a5a]"
              />
              <label
                htmlFor="age-verification"
                className="text-sm text-white/90 leading-relaxed"
              >
                By checking the box, you agree that you are at least 18 years of
                age.
              </label>
            </div>
          </div>
          {/* Region selector */} 
          <div className="flex gap-4 pr-10 text-xl">
            <div className="flex  gap-8">
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  Chobani Café
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  Foodservice
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  Consumer Care
                </a>
              </div>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-white hover:text-white/80 transition-colors"
                >
                  Chobani News
                </a>
              </div>
            </div>
            <Select>
              <SelectTrigger className="bg-transparent border-white text-white rounded-none w-[300px] ">
                <SelectValue placeholder="Choose region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex gap-4 mb-8">
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.372 0 12.017c0 5.215 3.358 9.63 8.207 11.188.6-.111 1.025-.513 1.025-1.139 0-.561-.02-2.042-.032-4.011-3.338.726-4.042-1.61-4.042-1.61C4.422 15.017 3.633 14.615 3.633 14.615c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825 1.143C20.565 21.917 24 17.495 24 12.017 24 5.372 18.626.001 12.001.001z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.001 12.017.001z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>

        {/* Copyright and legal links */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-sm text-white/70 mt-2 mb-3">
            © 2024 Chobani, LLC. All Rights Reserved.
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">
              Website Terms
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Do Not Sell or Share My Personal Information
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              California: Your Privacy Rights
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Accessibility Statement
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              CA Transparency in Supply Chains Act
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Supplier Code of Conduct
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Marketing to Children
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
