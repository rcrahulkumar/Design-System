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
import PatternsPage from './pages/PatternsPage';

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
          <Route path="/components/chip" element={<ChipPage />} />
          <Route path="/components/radio" element={<RadioPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/badge" element={<BadgePage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/banner" element={<BannerPage />} />
          <Route path="/components/list" element={<ListPage />} />
          <Route path="/components/header" element={<HeaderPage />} />
          <Route path="/components/bottom-bar" element={<BottomBarPage />} />
          <Route path="/components/text" element={<TextPage />} />
          <Route path="/components/permissions" element={<PermissionPage />} />
          <Route path="/components/health-data" element={<HealthDataPage />} />
          <Route path="/components/date-range-picker" element={<DateRangePickerPage />} />
          <Route path="/patterns" element={<PatternsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
