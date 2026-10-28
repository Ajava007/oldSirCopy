import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent) },
  {
    path: '',
    loadComponent: () => import('./shell/app-shell/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'workflow', pathMatch: 'full' },
      { path: 'workflow', loadComponent: () => import('./features/workflow/workflow.component').then(m => m.WorkflowComponent) },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'master-data/organizations', loadComponent: () => import('./features/master-data/organization/organization.component').then(m => m.OrganizationComponent) },
      { path: 'master-data/factories', loadComponent: () => import('./features/master-data/factory/factory.component').then(m => m.FactoryComponent) },
      { path: 'master-data/vehicle-models', loadComponent: () => import('./features/master-data/vehicle-model/vehicle-model.component').then(m => m.VehicleModelComponent) },
      { path: 'vehicle-config', loadComponent: () => import('./features/vehicle-config/vehicle-config.component').then(m => m.VehicleConfigComponent) },
      { path: 'engineering', loadComponent: () => import('./features/engineering/engineering.component').then(m => m.EngineeringComponent) },
      { path: 'supply-chain', loadComponent: () => import('./features/supply-chain/supply-chain.component').then(m => m.SupplyChainComponent) },
      { path: 'inventory', loadComponent: () => import('./features/inventory/inventory.component').then(m => m.InventoryComponent) },
      { path: 'production', loadComponent: () => import('./features/production/production.component').then(m => m.ProductionComponent) },
      { path: 'quality', loadComponent: () => import('./features/quality/quality.component').then(m => m.QualityComponent) },
      { path: 'vin-traceability', loadComponent: () => import('./features/vin-traceability/vin-traceability.component').then(m => m.VinTraceabilityComponent) },
      { path: 'sales-payments', loadComponent: () => import('./features/sales-payments/sales-payments.component').then(m => m.SalesPaymentsComponent) },
      { path: 'finished-vehicles', loadComponent: () => import('./features/finished-vehicles/finished-vehicles.component').then(m => m.FinishedVehiclesComponent) },
      { path: 'workforce', loadComponent: () => import('./features/workforce/workforce.component').then(m => m.WorkforceComponent) },
      { path: 'maintenance', loadComponent: () => import('./features/maintenance/maintenance.component').then(m => m.MaintenanceComponent) },
      { path: 'reports', loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent) },
      { path: 'approval-queues', loadComponent: () => import('./features/approval-queues/approval-queues.component').then(m => m.ApprovalQueuesComponent) },
      { path: 'scheduling', loadComponent: () => import('./features/scheduling/scheduling.component').then(m => m.SchedulingComponent) },
      { path: 'safety', loadComponent: () => import('./features/safety/safety.component').then(m => m.SafetyComponent) },
      { path: 'audit-log', loadComponent: () => import('./features/audit-log/audit-log.component').then(m => m.AuditLogComponent) }
    ]
  },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then(m => m.NotFoundComponent) }
];

