'use client';

import { useState, useEffect } from 'react';
import {
  Users,
  Calendar,
  DollarSign,
  Activity,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  BarChart3,
  Settings,
  FileText,
  MessageSquare,
  Download,
  Filter,
  Search,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus,
  Phone
} from 'lucide-react';
import Card, { CardContent, CardHeader } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

// Types pour le dashboard
interface Appointment {
  id: number;
  patient: string;
  doctor: string;
  service: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  amount: number;
}

interface Patient {
  id: number;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  nextAppointment: string;
  status: 'active' | 'inactive';
}

interface RevenueData {
  month: string;
  revenue: number;
  appointments: number;
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'appointments' | 'patients' | 'revenue'>('overview');
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [patients, setPatients] = useState<Patient[]>([]);
  const [revenueData, setRevenueData] = useState<RevenueData[]>([]);

  // Données simulées
  useEffect(() => {
    // Rendez-vous
    setAppointments([
      { id: 1, patient: 'Marie Dubois', doctor: 'Dr. Lambert', service: 'Consultation générale', date: '2024-01-15', time: '09:00', status: 'confirmed', amount: 60 },
      { id: 2, patient: 'Pierre Martin', doctor: 'Dr. Dubois', service: 'Cardiologie', date: '2024-01-15', time: '10:30', status: 'confirmed', amount: 80 },
      { id: 3, patient: 'Sophie Laurent', doctor: 'Dr. Martin', service: 'Pédiatrie', date: '2024-01-15', time: '11:15', status: 'pending', amount: 70 },
      { id: 4, patient: 'Jean Dupont', doctor: 'Dr. Leroy', service: 'Dermatologie', date: '2024-01-15', time: '14:00', status: 'confirmed', amount: 85 },
      { id: 5, patient: 'Claire Bernard', doctor: 'Dr. Lambert', service: 'Suivi médical', date: '2024-01-16', time: '09:30', status: 'cancelled', amount: 60 },
    ]);

    // Patients
    setPatients([
      { id: 1, name: 'Marie Dubois', email: 'marie.dubois@email.com', phone: '06 12 34 56 78', lastVisit: '2024-01-10', nextAppointment: '2024-01-15', status: 'active' },
      { id: 2, name: 'Pierre Martin', email: 'pierre.martin@email.com', phone: '06 23 45 67 89', lastVisit: '2024-01-12', nextAppointment: '2024-01-15', status: 'active' },
      { id: 3, name: 'Sophie Laurent', email: 'sophie.laurent@email.com', phone: '06 34 56 78 90', lastVisit: '2024-01-05', nextAppointment: '2024-01-15', status: 'active' },
      { id: 4, name: 'Jean Dupont', email: 'jean.dupont@email.com', phone: '06 45 67 89 01', lastVisit: '2023-12-20', nextAppointment: '2024-01-15', status: 'active' },
      { id: 5, name: 'Claire Bernard', email: 'claire.bernard@email.com', phone: '06 56 78 90 12', lastVisit: '2023-12-15', nextAppointment: '2024-01-16', status: 'inactive' },
    ]);

    // Données de revenus
    setRevenueData([
      { month: 'Jan', revenue: 12500, appointments: 156 },
      { month: 'Fév', revenue: 13200, appointments: 162 },
      { month: 'Mar', revenue: 14100, appointments: 175 },
      { month: 'Avr', revenue: 12900, appointments: 158 },
      { month: 'Mai', revenue: 14800, appointments: 184 },
      { month: 'Jun', revenue: 15600, appointments: 192 },
    ]);
  }, []);

  // Statistiques
  const stats = [
    { title: 'Patients actifs', value: '1,248', icon: Users, change: '+12%', color: 'blue' },
    { title: 'Rendez-vous aujourd\'hui', value: '18', icon: Calendar, change: '+3', color: 'green' },
    { title: 'Revenus du mois', value: '€15,600', icon: DollarSign, change: '+8%', color: 'purple' },
    { title: 'Taux de satisfaction', value: '98.2%', icon: Activity, change: '+0.5%', color: 'orange' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge variant="success" size="sm">Confirmé</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm">En attente</Badge>;
      case 'cancelled':
        return <Badge variant="error" size="sm">Annulé</Badge>;
      default:
        return <Badge variant="default" size="sm">{status}</Badge>;
    }
  };

  const getPatientStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge variant="success" size="sm">Actif</Badge>
      : <Badge variant="error" size="sm">Inactif</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tableau de bord administrateur</h1>
              <p className="text-gray-600">Société Médicale Les Perles</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
              <Button variant="primary" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 border-b border-gray-200">
            <Button
              variant={activeTab === 'overview' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="h-4 w-4 mr-2" />
              Vue d'ensemble
            </Button>
            <Button
              variant={activeTab === 'appointments' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('appointments')}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Rendez-vous
            </Button>
            <Button
              variant={activeTab === 'patients' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('patients')}
            >
              <Users className="h-4 w-4 mr-2" />
              Patients
            </Button>
            <Button
              variant={activeTab === 'revenue' ? 'primary' : 'secondary'}
              onClick={() => setActiveTab('revenue')}
            >
              <DollarSign className="h-4 w-4 mr-2" />
              Revenus
            </Button>
          </div>
        </div>

        {/* Vue d'ensemble */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Cartes de statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} hover>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                          <Icon className={`h-6 w-6 text-${stat.color}-600`} />
                        </div>
                        <span className="text-sm font-medium text-green-600">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.title}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Graphique et données récentes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Graphique des revenus */}
              <Card>
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Revenus mensuels</h3>
                    <Button variant="secondary" size="sm">
                      <Filter className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {revenueData.map((data, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            <TrendingUp className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{data.month}</div>
                            <div className="text-sm text-gray-600">{data.appointments} RDV</div>
                          </div>
                        </div>
                        <div className="text-lg font-bold text-gray-900">€{data.revenue.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Derniers rendez-vous */}
              <Card>
                <CardHeader className="border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Derniers rendez-vous</h3>
                    <Button variant="secondary" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y divide-gray-100">
                    {appointments.slice(0, 5).map((appointment) => (
                      <div key={appointment.id} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">{appointment.patient}</div>
                          {getStatusBadge(appointment.status)}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-4">
                            <span>{appointment.doctor}</span>
                            <span>•</span>
                            <span>{appointment.service}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-3 w-3" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Rendez-vous */}
        {activeTab === 'appointments' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un rendez-vous..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
                <Button variant="primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau RDV
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Médecin
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date/Heure
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Statut
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {appointments.map((appointment) => (
                        <tr key={appointment.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{appointment.patient}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">{appointment.doctor}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">{appointment.date}</div>
                            <div className="text-sm text-gray-600">{appointment.time}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">{appointment.service}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {getStatusBadge(appointment.status)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center gap-2">
                              <Button variant="secondary" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="secondary" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="secondary" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Patients */}
        {activeTab === 'patients' && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 w-full">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher un patient..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Rapports
                </Button>
                <Button variant="primary">
                  <Plus className="h-4 w-4 mr-2" />
                  Nouveau patient
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {patients.map((patient) => (
                <Card key={patient.id} hover>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{patient.name}</h3>
                        <p className="text-sm text-gray-600">{patient.email}</p>
                      </div>
                      {getPatientStatusBadge(patient.status)}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">{patient.phone}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div>
                          <div className="text-gray-500">Dernière visite</div>
                          <div className="text-gray-700">{patient.lastVisit}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Prochain RDV</div>
                          <div className="text-gray-700">{patient.nextAppointment}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Contacter
                      </Button>
                      <Button variant="secondary" size="sm">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Revenus */}
        {activeTab === 'revenue' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-green-100">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">+12.5%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">€89,400</div>
                  <div className="text-sm text-gray-600">Revenus totaux (6 mois)</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-blue-100">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">+8.2%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1,027</div>
                  <div className="text-sm text-gray-600">RDV totaux (6 mois)</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-purple-100">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-green-600">+15.3%</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">€87.10</div>
                  <div className="text-sm text-gray-600">Panier moyen</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Détails des revenus par mois</h3>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Mois
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          RDV
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Revenus
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Panier moyen
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Évolution
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {revenueData.map((data, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-gray-900">{data.month}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">{data.appointments}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">€{data.revenue.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-gray-900">€{(data.revenue / data.appointments).toFixed(2)}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge variant="success">+{(Math.random() * 15).toFixed(1)}%</Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Pied de page du dashboard */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
            <div>
              <p>© 2024 Société Médicale Les Perles. Tous droits réservés.</p>
              <p className="mt-1">Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p>Version 2.1.0 • Connecté en tant qu'administrateur</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}