import React from 'react';
import { 
  FiX, 
  FiPlus, 
  FiBell, 
  FiGrid, 
  FiUser, 
  FiChevronDown,
  FiTrendingUp,
  FiBarChart2,
  FiDollarSign
} from 'react-icons/fi';

export const CloseIcon = ({ className = "w-4 h-4" }) => (
  <FiX className={className} />
);

export const PlusIcon = ({ className = "w-6 h-6" }) => (
  <FiPlus className={className} />
);

export const AlarmIcon = ({ className = "w-6 h-6" }) => (
  <FiBell className={className} />
);

export const AppIcon = ({ className = "w-6 h-6" }) => (
  <FiGrid className={className} />
);

export const UserIcon = ({ className = "w-6 h-6" }) => (
  <FiUser className={className} />
);

export const CustomCaretDownIcon = ({ className = "w-4 h-4" }) => (
  <FiChevronDown className={className} />
);

export const TrendingUpIcon = ({ className = "w-6 h-6" }) => (
  <FiTrendingUp className={className} />
);

export const BarChartIcon = ({ className = "w-6 h-6" }) => (
  <FiBarChart2 className={className} />
);

export const DollarIcon = ({ className = "w-6 h-6" }) => (
  <FiDollarSign className={className} />
);