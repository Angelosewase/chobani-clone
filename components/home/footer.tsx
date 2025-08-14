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
      <div className="px-6 md:px-12 py-12">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-8">
          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-4">
              Get the freshest Chobani news
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 mb-4 max-w-[400px]">
              <Input
                type="email"
                placeholder="Enter email here"
                className="bg-transparent rounded-none border-0 border-b border-b-white/30 text-white placeholder:text-white/70 focus:border-b-white focus:outline-none flex-1"
              />
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2d5a5a] whitespace-nowrap bg-transparent border-0 border-b border-b-white/30 focus:border-b-white focus:outline-none rounded-none font-semibold"
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

          {/* Links + Region selector */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 w-full lg:w-auto">
            <div className="flex flex-wrap gap-8">
              <div className="space-y-3">
                <a href="#" className="block hover:text-white/80">
                  Chobani Café
                </a>
                <a href="#" className="block hover:text-white/80">
                  Foodservice
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block hover:text-white/80">
                  Careers
                </a>
                <a href="#" className="block hover:text-white/80">
                  Consumer Care
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block hover:text-white/80">
                  Chobani News
                </a>
              </div>
            </div>
            <Select>
              <SelectTrigger className="bg-transparent border-white text-white rounded-none w-full md:w-[300px]">
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
        <div className="flex flex-wrap gap-4 mb-8">
          {/* social icons remain unchanged */}
          {/* ... */}
        </div>

        {/* Bottom legal section */}
        <div className="border-t border-white/20 pt-6">
          <div className="text-sm text-white/70 mt-2 mb-3">
            © 2024 Chobani, LLC. All Rights Reserved.
          </div>
          <div className="flex flex-wrap gap-2 md:gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Website Terms</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">
              Do Not Sell or Share My Personal Information
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">
              California: Your Privacy Rights
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">Accessibility Statement</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">
              CA Transparency in Supply Chains Act
            </a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">Supplier Code of Conduct</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:text-white">Marketing to Children</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
