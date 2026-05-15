import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-page-bg text-text-primary">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-surface border-b border-border-default">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand placeholder */}
            <div className="text-xl font-medium text-text-primary">
              Green Boy Drop
            </div>
            
            {/* Navigation placeholder */}
            <div className="flex items-center space-x-8">
              <span className="text-sm text-text-secondary">Nav Item 1</span>
              <span className="text-sm text-text-secondary">Nav Item 2</span>
              <span className="text-sm text-text-secondary">Nav Item 3</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border-default mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-sm text-text-muted">
              © 2024 Green Boy Drop. All rights reserved.
            </p>
            <div className="mt-4 flex justify-center space-x-6">
              <span className="text-xs text-text-subtle">Footer Link 1</span>
              <span className="text-xs text-text-subtle">Footer Link 2</span>
              <span className="text-xs text-text-subtle">Footer Link 3</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
