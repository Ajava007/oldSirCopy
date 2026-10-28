import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'workflow', pathMatch: 'full' },
      { path: 'workflow', loadComponent: () => import('./pages/workflow/workflow.component').then(m => m.WorkflowComponent) },
      { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'master-data/organizations', loadComponent: () => import('./pages/master-data/organization/organization.component').then(m => m.OrganizationComponent) },
      { path: 'master-data/factories', loadComponent: () => import('./pages/master-data/factory/factory.component').then(m => m.FactoryComponent) },
      { path: 'master-data/vehicle-models', loadComponent: () => import('./pages/master-data/vehicle-model/vehicle-model.component').then(m => m.VehicleModelComponent) },
      { path: 'vehicle-config', loadComponent: () => import('./pages/vehicle-config/vehicle-config.component').then(m => m.VehicleConfigComponent) },
      { path: 'engineering', loadComponent: () => import('./pages/engineering/engineering.component').then(m => m.EngineeringComponent) },
      { path: 'supply-chain', loadComponent: () => import('./pages/supply-chain/supply-chain.component').then(m => m.SupplyChainComponent) },
      { path: 'inventory', loadComponent: () => import('./pages/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'production', loadComponent: () => import('./pages/production/production.component').then(m => m.ProductionComponent) },
      { path: 'quality', loadComponent: () => import('./pages/quality/quality.component').then(m => m.QualityComponent) },
      { path: 'vin-traceability', loadComponent: () => import('./pages/vin-traceability/vin-traceability.component').then(m => m.VinTraceabilityComponent) },
      { path: 'sales-payments', loadComponent: () => import('./pages/sales-payments/sales-payments.component').then(m => m.SalesPaymentsComponent) },
      { path: 'finished-vehicles', loadComponent: () => import('./pages/finished-vehicles/finished-vehicles.component').then(m => m.FinishedVehiclesComponent) },
      { path: 'workforce', loadComponent: () => import('./pages/workforce/workforce.component').then(m => m.WorkforceComponent) },
      { path: 'maintenance', loadComponent: () => import('./pages/maintenance/maintenance.component').then(m => m.MaintenanceComponent) },
      { path: 'reports', loadComponent: () => import('./pages/reports/reports.component').then(m => m.ReportsComponent) },
      { path: 'approval-queues', loadComponent: () => import('./pages/approval-queues/approval-queues.component').then(m => m.ApprovalQueuesComponent) },
      { path: 'scheduling', loadComponent: () => import('./pages/scheduling/scheduling.component').then(m => m.SchedulingComponent) },
      { path: 'safety', loadComponent: () => import('./pages/safety/safety.component').then(m => m.SafetyComponent) },
      { path: 'audit-log', loadComponent: () => import('./pages/audit-log/audit-log.component').then(m => m.AuditLogComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent) }
];
