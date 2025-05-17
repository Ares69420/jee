import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container fade-in">
      <!-- Minimalist Hero Section -->
      <div class="hero-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h1 class="hero-title">INVENTORY SIMPLIFIED</h1>
              <p class="hero-subtitle">
                Streamlined stock management for the modern enterprise
              </p>
              <div class="hero-buttons">
                <button *ngIf="!isAuthenticated" class="btn btn-primary btn-lg me-3" [routerLink]="['/login']">
                  ENTER PLATFORM
                </button>
                <button *ngIf="isAuthenticated" class="btn btn-primary btn-lg me-3" [routerLink]="['/dashboard']">
                  ACCESS SYSTEM
                </button>
                <button *ngIf="!isAuthenticated" class="btn btn-outline-light btn-lg" [routerLink]="['/register']">
                  CREATE ACCOUNT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Core Capabilities Section -->
      <div class="capabilities-section">
        <div class="container">
          <div class="section-header text-center">
            <h2>CORE CAPABILITIES</h2>
          </div>
          
          <div class="row g-4 mt-4">
            <div class="col-md-4">
              <div class="capability-card">
                <h3>STOCK CONTROL</h3>
                <p>Real-time inventory tracking with automated alerts for critical thresholds and expiring items.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="capability-card">
                <h3>VENDOR RELATIONS</h3>
                <p>Centralized supplier management with performance metrics and automated procurement workflows.</p>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="capability-card">
                <h3>DATA INTELLIGENCE</h3>
                <p>Advanced analytics on inventory turnover, supplier performance, and procurement optimization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Key Benefits Section -->
      <div class="benefits-section">
        <div class="container">
          <div class="section-header text-center">
            <h2>STRATEGIC ADVANTAGES</h2>
          </div>
          
          <div class="row benefit-row">
            <div class="col-lg-6">
              <div class="benefit-content">
                <h3>CAPITAL EFFICIENCY</h3>
                <p>Optimize inventory levels to reduce carrying costs while maintaining operational readiness.</p>
                <ul class="benefit-list">
                  <li>Excess inventory reduction</li>
                  <li>Obsolescence prevention</li>
                  <li>Order cycle optimization</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="benefit-content">
                <h3>OPERATIONAL EXCELLENCE</h3>
                <p>Streamline processes and eliminate manual errors to enhance supply chain performance.</p>
                <ul class="benefit-list">
                  <li>Automated replenishment</li>
                  <li>Precision inventory tracking</li>
                  <li>Enterprise system integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="cta-section">
        <div class="container">
          <div class="cta-card">
            <div class="row">
              <div class="col-lg-8 mx-auto text-center">
                <h2>TRANSFORM YOUR INVENTORY MANAGEMENT</h2>
                <p>Join forward-thinking organizations that have revolutionized their operations with STOCKFLOW.</p>
                <div class="mt-4">
                  <button *ngIf="!isAuthenticated" class="btn btn-primary btn-lg" [routerLink]="['/register']">
                    BEGIN TRANSFORMATION
                  </button>
                  <button *ngIf="isAuthenticated" class="btn btn-primary btn-lg" [routerLink]="['/dashboard']">
                    RETURN TO PLATFORM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Hero Section */
    .home-container {
      margin-top: -2rem;
    }
    
    .hero-section {
      background: #000000;
      color: white;
      padding: 8rem 0;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      color: white;
      letter-spacing: 2px;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      margin-bottom: 3rem;
      opacity: 0.8;
    }
    
    .hero-buttons {
      margin-bottom: 2rem;
    }
    
    /* Capabilities Section */
    .capabilities-section {
      padding: 6rem 0;
      background: #ffffff;
    }
    
    .section-header h2 {
      font-size: 2rem;
      letter-spacing: 2px;
      margin-bottom: 3rem;
    }
    
    .capability-card {
      padding: 2.5rem;
      height: 100%;
      background: #f9f9f9;
      transition: transform 0.3s;
    }
    
    .capability-card:hover {
      transform: translateY(-10px);
    }
    
    .capability-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }
    
    .capability-card p {
      color: #555;
      line-height: 1.7;
    }
    
    /* Benefits Section */
    .benefits-section {
      padding: 6rem 0;
      background: #f2f2f2;
    }
    
    .benefit-row {
      margin-top: 3rem;
    }
    
    .benefit-content {
      padding: 2.5rem;
      height: 100%;
    }
    
    .benefit-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }
    
    .benefit-content p {
      color: #555;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }
    
    .benefit-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .benefit-list li {
      padding: 0.5rem 0;
      color: #555;
    }
    
    /* CTA Section */
    .cta-section {
      padding: 6rem 0;
      background: #000000;
      color: white;
    }
    
    .cta-card {
      padding: 2rem;
    }
    
    .cta-card h2 {
      color: white;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      letter-spacing: 2px;
    }
    
    .cta-card p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
      font-size: 1.1rem;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-section, 
      .capabilities-section, 
      .benefits-section, 
      .cta-section {
        padding: 4rem 0;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  isAuthenticated = false;
  
  constructor(private authService: AuthService) {}
  
  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.authStatus$.subscribe(status => {
      this.isAuthenticated = status;
    });
  }
}

