'use client';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GOFLOW</h3>
            <p className="text-sm text-gray-400">
              The AI Operating System for Organizations
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">GOFLOW AI</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Political</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Rider</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Market</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Agri</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Newsroom</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">API Docs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Security</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Compliance</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition">Facebook</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>&copy; 2026 GOFLOW. All rights reserved. | Built for Thailand 🇹🇭</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
