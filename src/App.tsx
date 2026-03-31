/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import ColorsPage from './pages/tokens/ColorsPage';
import TypographyPage from './pages/tokens/TypographyPage';
import ButtonPage from './pages/components/ButtonPage';
import InputPage from './pages/components/InputPage';
import TextareaPage from './pages/components/TextareaPage';
import UploadPage from './pages/components/UploadPage';
import CardPage from './pages/components/CardPage';
import BadgePage from './pages/components/BadgePage';
import AlertPage from './pages/components/AlertPage';
import BannerPage from './pages/components/BannerPage';
import ChipPage from './pages/components/ChipPage';
import RadioPage from './pages/components/RadioPage';
import CheckboxPage from './pages/components/CheckboxPage';
import ListPage from './pages/components/ListPage';
import HeaderPage from './pages/components/HeaderPage';
import BottomBarPage from './pages/components/BottomBarPage';
import TextPage from './pages/components/TextPage';
import PermissionPage from './pages/components/PermissionPage';
import HealthDataPage from './pages/components/HealthDataPage';
import DateRangePickerPage from './pages/components/DateRangePickerPage';
import InsightCardPage from './pages/components/InsightCardPage';
import MetricCardPage from './pages/components/MetricCardPage';
import AppointmentCardPage from './pages/components/AppointmentCardPage';
import MedicationCardPage from './pages/components/MedicationCardPage';
import LabResultCardPage from './pages/components/LabResultCardPage';
import ActivityCardPage from './pages/components/ActivityCardPage';
import ConditionCardPage from './pages/components/ConditionCardPage';
import StatCardPage from './pages/components/StatCardPage';
import DoctorCardPage from './pages/components/DoctorCardPage';
import AICardPage from './pages/components/AICardPage';
import ProgressBarPage from './pages/components/ProgressBarPage';
import MapPinPage from './pages/components/MapPinPage';
import CallControlsPage from './pages/components/CallControlsPage';
import PaymentCardPage from './pages/components/PaymentCardPage';
import CartItemPage from './pages/components/CartItemPage';
import PatternsPage from './pages/PatternsPage';

// New Components
import MetricGraphCardPage from './pages/components/MetricGraphCardPage';
import HealthSummaryCardPage from './pages/components/HealthSummaryCardPage';
import WeeklyBarChartPage from './pages/components/WeeklyBarChartPage';
import ActivityTimelineCardPage from './pages/components/ActivityTimelineCardPage';
import MetricGridCardPage from './pages/components/MetricGridCardPage';
import DoctorListItemPage from './pages/components/DoctorListItemPage';
import CalendarSlotPickerPage from './pages/components/CalendarSlotPickerPage';
import InputSelectorPage from './pages/components/InputSelectorPage';
import ProfileHeaderCardPage from './pages/components/ProfileHeaderCardPage';
import FloatingActionBarPage from './pages/components/FloatingActionBarPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tokens/colors" element={<ColorsPage />} />
          <Route path="/tokens/typography" element={<TypographyPage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/input" element={<InputPage />} />
          <Route path="/components/textarea" element={<TextareaPage />} />
          <Route path="/components/upload" element={<UploadPage />} />
          <Route path="/components/chip" element={<ChipPage />} />
          <Route path="/components/radio" element={<RadioPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/input-selector" element={<InputSelectorPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/badge" element={<BadgePage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/banner" element={<BannerPage />} />
          <Route path="/components/list" element={<ListPage />} />
          <Route path="/components/header" element={<HeaderPage />} />
          <Route path="/components/bottom-bar" element={<BottomBarPage />} />
          <Route path="/components/floating-action-bar" element={<FloatingActionBarPage />} />
          <Route path="/components/text" element={<TextPage />} />
          <Route path="/components/permissions" element={<PermissionPage />} />
          <Route path="/components/health-data" element={<HealthDataPage />} />
          <Route path="/components/date-range-picker" element={<DateRangePickerPage />} />
          <Route path="/components/calendar-slot-picker" element={<CalendarSlotPickerPage />} />
          <Route path="/components/insight-card" element={<InsightCardPage />} />
          <Route path="/components/metric-card" element={<MetricCardPage />} />
          <Route path="/components/metric-graph-card" element={<MetricGraphCardPage />} />
          <Route path="/components/metric-grid-card" element={<MetricGridCardPage />} />
          <Route path="/components/health-summary-card" element={<HealthSummaryCardPage />} />
          <Route path="/components/weekly-bar-chart" element={<WeeklyBarChartPage />} />
          <Route path="/components/appointment-card" element={<AppointmentCardPage />} />
          <Route path="/components/medication-card" element={<MedicationCardPage />} />
          <Route path="/components/lab-result-card" element={<LabResultCardPage />} />
          <Route path="/components/activity-card" element={<ActivityCardPage />} />
          <Route path="/components/activity-timeline-card" element={<ActivityTimelineCardPage />} />
          <Route path="/components/condition-card" element={<ConditionCardPage />} />
          <Route path="/components/stat-card" element={<StatCardPage />} />
          <Route path="/components/doctor-card" element={<DoctorCardPage />} />
          <Route path="/components/doctor-list-item" element={<DoctorListItemPage />} />
          <Route path="/components/profile-header-card" element={<ProfileHeaderCardPage />} />
          <Route path="/components/ai-card" element={<AICardPage />} />
          <Route path="/components/progress-bar" element={<ProgressBarPage />} />
          <Route path="/components/map-pin" element={<MapPinPage />} />
          <Route path="/components/call-controls" element={<CallControlsPage />} />
          <Route path="/components/payment-card" element={<PaymentCardPage />} />
          <Route path="/components/cart-item" element={<CartItemPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
