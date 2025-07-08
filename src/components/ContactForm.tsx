
'use client';
import Link from 'next/link';
import { useState, useCallback, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { FaCheckCircle, FaEnvelope, FaPhone, FaEnvelope as FaEmail, FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactForm() {
  // Country data (sample for brevity; full list should include ~240 countries)
  const countries = [
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+355', name: 'Albania', flag: '🇦🇱', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+213', name: 'Algeria', flag: '🇩🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+376', name: 'Andorra', flag: '🇦🇩', maxLength: 9, regex: /^\d{6,9}$/ },
  { code: '+244', name: 'Angola', flag: '🇦🇴', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+1', name: 'Antigua and Barbuda', flag: '🇦🇬', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+54', name: 'Argentina', flag: '🇦🇷', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+374', name: 'Armenia', flag: '🇦🇲', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+61', name: 'Australia', flag: '🇦🇺', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+43', name: 'Austria', flag: '🇦🇹', maxLength: 11, regex: /^\d{10,11}$/ },
  { code: '+994', name: 'Azerbaijan', flag: '🇦🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+1', name: 'Bahamas', flag: '🇧🇸', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Barbados', flag: '🇧🇧', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+375', name: 'Belarus', flag: '🇧🇾', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+32', name: 'Belgium', flag: '🇧🇪', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+501', name: 'Belize', flag: '🇧🇿', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+229', name: 'Benin', flag: '🇧🇯', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+975', name: 'Bhutan', flag: '🇧🇹', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+267', name: 'Botswana', flag: '🇧🇼', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+55', name: 'Brazil', flag: '🇧🇷', maxLength: 11, regex: /^\d{10,11}$/ },
  { code: '+673', name: 'Brunei', flag: '🇧🇳', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+226', name: 'Burkina Faso', flag: '🇧🇫', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+257', name: 'Burundi', flag: '🇧🇮', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+855', name: 'Cambodia', flag: '🇰🇭', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+237', name: 'Cameroon', flag: '🇨🇲', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+1', name: 'Canada', flag: '🇨🇦', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+238', name: 'Cape Verde', flag: '🇨🇻', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+236', name: 'Central African Republic', flag: '🇨🇫', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+235', name: 'Chad', flag: '🇹🇩', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+56', name: 'Chile', flag: '🇨🇱', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+86', name: 'China', flag: '🇨🇳', maxLength: 11, regex: /^\d{11}$/ },
  { code: '+57', name: 'Colombia', flag: '🇨🇴', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+269', name: 'Comoros', flag: '🇰🇲', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+242', name: 'Congo', flag: '🇨🇬', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+243', name: 'Congo (DRC)', flag: '🇨🇩', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+385', name: 'Croatia', flag: '🇭🇷', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+53', name: 'Cuba', flag: '🇨🇺', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+357', name: 'Cyprus', flag: '🇨🇾', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+45', name: 'Denmark', flag: '🇩🇰', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+253', name: 'Djibouti', flag: '🇩🇯', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+1', name: 'Dominica', flag: '🇩🇲', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Dominican Republic', flag: '🇩🇴', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+20', name: 'Egypt', flag: '🇪🇬', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+503', name: 'El Salvador', flag: '🇸🇻', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+291', name: 'Eritrea', flag: '🇪🇷', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+372', name: 'Estonia', flag: '🇪🇪', maxLength: 8, regex: /^\d{7,8}$/ },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+679', name: 'Fiji', flag: '🇫🇯', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+358', name: 'Finland', flag: '🇫🇮', maxLength: 12, regex: /^\d{9,12}$/ },
  { code: '+33', name: 'France', flag: '🇫🇷', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+241', name: 'Gabon', flag: '🇬🇦', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+220', name: 'Gambia', flag: '🇬🇲', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+995', name: 'Georgia', flag: '🇬🇪', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+49', name: 'Germany', flag: '🇩🇪', maxLength: 11, regex: /^\d{10,11}$/ },
  { code: '+233', name: 'Ghana', flag: '🇬🇭', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+30', name: 'Greece', flag: '🇬🇷', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Grenada', flag: '🇬🇩', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+224', name: 'Guinea', flag: '🇬🇳', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+592', name: 'Guyana', flag: '🇬🇾', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+509', name: 'Haiti', flag: '🇭🇹', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+504', name: 'Honduras', flag: '🇭🇳', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+852', name: 'Hong Kong', flag: '🇭🇰', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+36', name: 'Hungary', flag: '🇭🇺', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+354', name: 'Iceland', flag: '🇮🇸', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+91', name: 'India', flag: '🇮🇳', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩', maxLength: 12, regex: /^\d{9,12}$/ },
  { code: '+98', name: 'Iran', flag: '🇮🇷', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+964', name: 'Iraq', flag: '🇮🇶', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+353', name: 'Ireland', flag: '🇮🇪', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+972', name: 'Israel', flag: '🇮🇱', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+39', name: 'Italy', flag: '🇮🇹', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Jamaica', flag: '🇯🇲', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+81', name: 'Japan', flag: '🇯🇵', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+962', name: 'Jordan', flag: '🇯🇴', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+7', name: 'Kazakhstan', flag: '🇰🇿', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+254', name: 'Kenya', flag: '🇰🇪', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+686', name: 'Kiribati', flag: '🇰🇮', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+856', name: 'Laos', flag: '🇱🇦', maxLength: 10, regex: /^\d{8,10}$/ },
  { code: '+371', name: 'Latvia', flag: '🇱🇻', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+266', name: 'Lesotho', flag: '🇱🇸', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+231', name: 'Liberia', flag: '🇱🇷', maxLength: 9, regex: /^\d{7,9}$/ },
  { code: '+218', name: 'Libya', flag: '🇱🇾', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+423', name: 'Liechtenstein', flag: '🇱🇮', maxLength: 9, regex: /^\d{7,9}$/ },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+853', name: 'Macau', flag: '🇲🇴', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+389', name: 'Macedonia', flag: '🇲🇰', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+261', name: 'Madagascar', flag: '🇲🇬', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+265', name: 'Malawi', flag: '🇲🇼', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+960', name: 'Maldives', flag: '🇲🇻', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+223', name: 'Mali', flag: '🇲🇱', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+356', name: 'Malta', flag: '🇲🇹', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+692', name: 'Marshall Islands', flag: '🇲🇭', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+222', name: 'Mauritania', flag: '🇲🇷', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+230', name: 'Mauritius', flag: '🇲🇺', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+52', name: 'Mexico', flag: '🇲🇽', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+691', name: 'Micronesia', flag: '🇫🇲', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+373', name: 'Moldova', flag: '🇲🇩', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+377', name: 'Monaco', flag: '🇲🇨', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+976', name: 'Mongolia', flag: '🇲🇳', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+382', name: 'Montenegro', flag: '🇲🇪', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+212', name: 'Morocco', flag: '🇲🇦', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+258', name: 'Mozambique', flag: '🇲🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲', maxLength: 10, regex: /^\d{7,10}$/ },
  { code: '+264', name: 'Namibia', flag: '🇳🇦', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+674', name: 'Nauru', flag: '🇳🇷', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+977', name: 'Nepal', flag: '🇳🇵', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+227', name: 'Niger', flag: '🇳🇪', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+47', name: 'Norway', flag: '🇳🇴', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+968', name: 'Oman', flag: '🇴🇲', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+680', name: 'Palau', flag: '🇵🇼', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+970', name: 'Palestine', flag: '🇵🇸', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+507', name: 'Panama', flag: '🇵🇦', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬', maxLength: 8, regex: /^\d{7,8}$/ },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+51', name: 'Peru', flag: '🇵🇪', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+63', name: 'Philippines', flag: '🇵🇭', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+48', name: 'Poland', flag: '🇵🇱', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+351', name: 'Portugal', flag: '🇵🇹', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+974', name: 'Qatar', flag: '🇶🇦', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+40', name: 'Romania', flag: '🇷🇴', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+7', name: 'Russia', flag: '🇷🇺', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+1', name: 'Saint Kitts and Nevis', flag: '🇰🇳', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Saint Lucia', flag: '🇱🇨', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+1', name: 'Saint Vincent and the Grenadines', flag: '🇻🇨', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+685', name: 'Samoa', flag: '🇼🇸', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+378', name: 'San Marino', flag: '🇸🇲', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+239', name: 'Sao Tome and Principe', flag: '🇸🇹', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+221', name: 'Senegal', flag: '🇸🇳', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+381', name: 'Serbia', flag: '🇷🇸', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+248', name: 'Seychelles', flag: '🇸🇨', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+232', name: 'Sierra Leone', flag: '🇸🇱', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+65', name: 'Singapore', flag: '🇸🇬', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+386', name: 'Slovenia', flag: '🇸🇮', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+677', name: 'Solomon Islands', flag: '🇸🇧', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+252', name: 'Somalia', flag: '🇸🇴', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+27', name: 'South Africa', flag: '🇿🇦', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+82', name: 'South Korea', flag: '🇰🇷', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+211', name: 'South Sudan', flag: '🇸🇸', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+34', name: 'Spain', flag: '🇪🇸', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+249', name: 'Sudan', flag: '🇸🇩', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+597', name: 'Suriname', flag: '🇸🇷', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+268', name: 'Swaziland', flag: '🇸🇿', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+46', name: 'Sweden', flag: '🇸🇪', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+41', name: 'Switzerland', flag: '🇨🇭', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+963', name: 'Syria', flag: '🇸🇾', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+992', name: 'Tajikistan', flag: '🇹🇯', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+66', name: 'Thailand', flag: '🇹🇭', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+670', name: 'Timor-Leste', flag: '🇹🇱', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+228', name: 'Togo', flag: '🇹🇬', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+676', name: 'Tonga', flag: '🇹🇴', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+1', name: 'Trinidad and Tobago', flag: '🇹🇹', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+216', name: 'Tunisia', flag: '🇹🇳', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+90', name: 'Turkey', flag: '🇹🇷', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+993', name: 'Turkmenistan', flag: '🇹🇲', maxLength: 8, regex: /^\d{8}$/ },
  { code: '+688', name: 'Tuvalu', flag: '🇹🇻', maxLength: 6, regex: /^\d{6}$/ },
  { code: '+256', name: 'Uganda', flag: '🇺🇬', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+44', name: 'United Kingdom', flag: '🇬🇧', maxLength: 11, regex: /^\d{9,11}$/ },
  { code: '+1', name: 'United States', flag: '🇺🇸', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾', maxLength: 9, regex: /^\d{8,9}$/ },
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+678', name: 'Vanuatu', flag: '🇻🇺', maxLength: 7, regex: /^\d{7}$/ },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪', maxLength: 10, regex: /^\d{10}$/ },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳', maxLength: 10, regex: /^\d{9,10}$/ },
  { code: '+967', name: 'Yemen', flag: '🇾🇪', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+260', name: 'Zambia', flag: '🇿🇲', maxLength: 9, regex: /^\d{9}$/ },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼', maxLength: 9, regex: /^\d{9}$/ },
];

  const servicesOptions = [
    { value: 'web-design-development', label: 'Web Design & Development' },
    { value: 'mobile-app-development', label: 'Mobile App Development' },
    { value: 'website-maintenance', label: 'Website Maintenance' },
    { value: 'ui-ux-design-branding', label: 'UI/UX Design & Branding' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'custom-business-solutions', label: 'Custom Business Solutions' },
    { value: 'general-enquiry', label: 'General Enquiry' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default to India
    company: '',
    requirements: '',
    service: [] as string[], // Store multiple selections
    contactMethod: 'email',
    agreePrivacy: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
    service: '',
    agreePrivacy: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [showEmailAnimation, setShowEmailAnimation] = useState(false); // State for email animation

  // State to track if the country code select or phone input has been interacted with
  const [isPhoneSectionActive, setIsPhoneSectionActive] = useState(false);

  // Ref to the form container for scrolling
  const formContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox' && name === 'service') {
      const target = e.target as HTMLInputElement;
      const serviceValue = value;
      const checked = target.checked;
      setFormData(prev => {
        const currentServices = prev.service;
        if (checked) {
          return {
            ...prev,
            service: [...currentServices, serviceValue],
          };
        } else {
          return {
            ...prev,
            service: currentServices.filter(s => s !== serviceValue),
          };
        }
      });
    } else if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: target.checked,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
      // If the country code or phone input changes, set the section as active
      if (name === 'countryCode' || name === 'phone') {
        setIsPhoneSectionActive(true);
      }
    }
  };

  const handlePhoneFocus = () => {
    setIsPhoneSectionActive(true);
  };

  const handlePhoneBlur = () => {
    // Only deactivate if both country code and phone input are empty and not focused
    if (!formData.phone && formData.countryCode === '+91') {
      setIsPhoneSectionActive(false);
    }
  };

  const onReCAPTCHAChange = useCallback((token: string | null) => {
    setRecaptchaToken(token);
  }, []);

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      requirements: '',
      service: '',
      agreePrivacy: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (!/^[A-Za-z\s'-]{2,50}$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters, spaces, hyphens, or apostrophes (2–50 characters)';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0.9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else {
      const selectedCountry = countries.find(country => country.code === formData.countryCode);
      if (selectedCountry) {
        if (!selectedCountry.regex.test(formData.phone)) {
          newErrors.phone = `Phone number must be ${selectedCountry.maxLength} digits for ${selectedCountry.name}`;
          isValid = false;
        }
      } else {
        newErrors.phone = 'Invalid country code';
        isValid = false;
      }
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = 'Project requirements are required';
      isValid = false;
    }
    if (formData.service.length === 0) {
      newErrors.service = 'Please select at least one service or purpose of enquiry';
      isValid = false;
    }
    if (!formData.agreePrivacy) {
      newErrors.agreePrivacy = 'You must agree to the privacy policy';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!recaptchaToken) {
      setSubmitError('Please complete the reCAPTCHA verification.');
      return;
    }
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Prepare the payload for both API requests
        const payload = {
          name: formData.name,
          email: formData.email,
          phone: `${formData.countryCode} ${formData.phone}`,
          company: formData.company || 'Not provided',
          service: formData.service,
          requirements: formData.requirements,
          contactMethod: formData.contactMethod,
          agreePrivacy: formData.agreePrivacy,
          recaptchaToken,
        };

        // Step 1 & 2: Send data to email and Google Sheets APIs in parallel
        const [emailResponse, sheetsResponse] = await Promise.all([
          fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          }),
          fetch('/api/send-to-google-sheets', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...payload,
              recaptchaToken: undefined, // Not needed for Google Sheets
            }),
          }),
        ]);

        // Handle email response
        if (!emailResponse.ok) {
          let errorMessage = 'Failed to send email.';
          try {
            const errorData = await emailResponse.json();
            errorMessage = errorData.message || errorMessage;
          } catch (jsonError) {
            const errorText = await emailResponse.text();
            console.error('Non-JSON response from /api/send-email:', errorText);
          }
          throw new Error(errorMessage);
        }

        // Handle Google Sheets response
        if (!sheetsResponse.ok) {
          let errorMessage = 'Failed to send data to Google Sheets.';
          let detailedError = '';
          try {
            const errorData = await sheetsResponse.json();
            errorMessage = errorData.message || errorMessage;
            detailedError = errorData.error || '';
          } catch (jsonError) {
            const errorText = await sheetsResponse.text();
            console.error('Non-JSON response from /api/send-to-google-sheets:', errorText);
          }
          throw new Error(`${errorMessage}${detailedError ? `: ${detailedError}` : ''}`);
        }

        // If both requests succeed, update the form state
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          countryCode: '+91',
          company: '',
          requirements: '',
          service: [],
          contactMethod: 'email',
          agreePrivacy: false,
        });
        setRecaptchaToken(null);
        setIsPhoneSectionActive(false); // Reset phone section state

        // Scroll to the top of the form container to show the success message
        if (formContainerRef.current) {
          formContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Show email animation immediately
        setShowEmailAnimation(true);

        // Reset the form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setShowEmailAnimation(false);
        }, 5000);
      } catch (error: unknown) {
        // Type guard to safely access error.message
        if (error instanceof Error) {
          setSubmitError(error.message || 'An error occurred while submitting the form. Please try again later.');
        } else {
          setSubmitError('An unexpected error occurred while submitting the form. Please try again later.');
        }
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <div
        ref={formContainerRef}
        className="max-w-2xl mx-auto bg-dark-900 backdrop-blur-md rounded-lg p-8 shadow-xl border border-gray-600/20 animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Get in Touch</h2>
        {submitted ? (
          <div className="text-center text-brand-blue mb-6 animate-pulse">
            <FaCheckCircle className="inline-block w-8 h-8 mb-2" />
            <p>Thank you for your submission! We’ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitError && <p className="text-red-500 text-center mb-4">{submitError}</p>}
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Name"
              />
              <label
                htmlFor="name"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brand-blue peer-focus:dark:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Name *
              </label>
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Email"
              />
              <label
                htmlFor="email"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brand-blue peer-focus:dark:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Email *
              </label>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </motion.div>

            {/* Phone with Country Code Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="flex items-center border border-gray-600 rounded-lg focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/30 transition-all duration-300">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  className="bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none w-28 truncate"
                  aria-label="Country Code"
                >
                  {countries.map((country) => (
                    <option key={country.code + country.name} value={country.code}>
                      {`${country.flag} ${country.code}`}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handlePhoneFocus}
                  onBlur={handlePhoneBlur}
                  maxLength={countries.find(country => country.code === formData.countryCode)?.maxLength || 10}
                  className="flex-1 bg-dark-900/70 text-white border-none py-3 px-4 focus:outline-none"
                  placeholder=" "
                  aria-label="Your Phone Number"
                />
                <label
                  htmlFor="phone"
                  className={`absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform z-10 origin-[0] bg-gray-900 px-2 ${
                    isPhoneSectionActive
                      ? '-translate-y-4 scale-75 top-2 text-brand-blue'
                      : 'scale-100 -translate-y-1/2 top-1/2 left-32'
                  }`}
                >
                  Your Phone Number *
                </label>
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </motion.div>

            {/* Company (Optional) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer"
                placeholder=" "
                aria-label="Your Company Name"
              />
              <label
                htmlFor="company"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brand-blue peer-focus:dark:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Company Name (Optional)
              </label>
            </motion.div>

            {/* Services or Purpose of Enquiry (Checkbox Selection) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <label className="block text-lg text-brand-blue mb-2">
                Service or Purpose of Enquiry *
              </label>
              <div className="services-container bg-dark-900/70 border border-gray-600 rounded-md p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {servicesOptions.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        name="service"
                        value={option.value}
                        checked={formData.service.includes(option.value)}
                        onChange={handleChange}
                        className="hidden service-checkbox"
                        id={option.value}
                      />
                      <label
                        htmlFor={option.value}
                        className="flex items-center w-full p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-dark-800 hover:shadow-md transform hover:scale-105"
                      >
                        <span className="checkbox-icon w-5 h-5 mr-2 border border-gray-600 rounded flex items-center justify-center transition-all duration-300">
                          {formData.service.includes(option.value) && (
                            <span className="w-3 h-3 bg-brand-blue rounded-sm animate-check"></span>
                          )}
                        </span>
                        <span className="text-gray-300">{option.label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative"
            >
              <textarea
                name="requirements"
                id="requirements"
                value={formData.requirements}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 peer min-h-[150px]"
                placeholder=" "
                aria-label="Your Project Requirements"
              />
              <label
                htmlFor="requirements"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brand-blue peer-focus:dark:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Your Project Requirements *
              </label>
              {errors.requirements && <p className="text-red-500 text-sm mt-1">{errors.requirements}</p>}
            </motion.div>

            {/* Preferred Contact Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <select
                name="contactMethod"
                id="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full bg-dark-900/70 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/30 transition-all duration-300 appearance-none peer"
                aria-label="Preferred Contact Method"
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
              <label
                htmlFor="contactMethod"
                className="absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-brand-blue peer-focus:dark:text-brand-blue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Preferred Contact Method
              </label>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>

            {/* Privacy Policy Checkbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-2"
            >
              <input
                type="checkbox"
                name="agreePrivacy"
                checked={formData.agreePrivacy}
                onChange={handleChange}
                className="h-4 w-4 text-brand-blue focus:ring-brand-blue border-gray-600 rounded transition-all duration-300"
                aria-label="Agree to Privacy Policy"
              />
              <label className="text-gray-400">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-brand-blue hover:underline transition-colors">
                  Privacy Policy
                </Link>{' '}
                *
              </label>
            </motion.div>
            {errors.agreePrivacy && <p className="text-red-500 text-sm">{errors.agreePrivacy}</p>}

            {/* reCAPTCHA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex justify-center"
            >
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || 'your-recaptcha-site-key'}
                onChange={onReCAPTCHAChange}
                theme="dark"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className={`w-full contact-us-button text-white font-semibold py-3 rounded-md transition-all duration-300 flex items-center justify-center ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Submitting Enquiry...
                </>
              ) : (
                'Submit Your Enquiry'
              )}
            </motion.button>
          </form>
        )}
        {/* Email Animation */}
        {showEmailAnimation && (
          <div className="email-animation">
            <FaEnvelope className="email-icon" />
          </div>
        )}
      </div>

      {/* Contact Information Section */}
      <div className="max-w-2xl mx-auto mt-8 text-center">
        <h3 className="text-xl font-semibold text-brand-blue mb-4">Contact Us Directly</h3>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0">
          <p className="text-gray-400 flex items-center">
            <FaEmail className="mr-2 text-brand-blue" /> 
            <a href="mailto:contact@intentioninfoservice.com" className="text-brand-blue hover:underline">
              contact@intentioninfoservice.com
            </a>
          </p>
          <p className="text-gray-400 flex items-center">
            <FaPhone className="mr-2 text-brand-blue" /> 
            <a href="tel:+917021539267" className="text-brand-blue hover:underline">
              +91 7021539267
            </a>
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bg-spin {
          to {
            --border-angle: 1turn;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes check {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fly-to-logo {
          0% {
            bottom: 50%;
            left: 50%;
            transform: translate(-50%, 50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, 50%) scale(1.2);
            opacity: 0.8;
          }
          80% {
            bottom: 90%;
            left: 10%;
            transform: translate(0, 0) scale(0.5);
            opacity: 0.7;
          }
          100% {
            bottom: 90%;
            left: 5%;
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .contact-us-button {
          --border-angle: 0turn;
          --main-bg: conic-gradient(
            from var(--border-angle),
            #213,
            #112 5%,
            #112 60%,
            #213 95%
          );
          --gradient-border: conic-gradient(
            from var(--border-angle),
            transparent 25%,
            #08f,
            #f03 99%,
            transparent
          );
          border: solid 2px transparent;
          border-radius: 0.5em;
          background:
            var(--main-bg) padding-box,
            var(--gradient-border) border-box,
            var(--main-bg) border-box;
          background-position: center center;
          animation: bg-spin 3s linear infinite;
        }

        .contact-us-button:hover:not(:disabled) {
          animation-play-state: paused;
          box-shadow: 0 0 15px rgba(0, 160, 227, 0.5);
        }

        /* Email Animation Styles */
        .email-animation {
          position: fixed;
          z-index: 1000;
        }

        .email-icon {
          position: absolute;
          bottom: 50%;
          left: 50%;
          transform: translate(-50%, 50%);
          font-size: 2rem;
          color: #00a0e3;
          animation: fly-to-logo 2s ease-in-out forwards;
        }

        /* Custom Checkbox Styles */
        .services-container {
          /* Removed max-height and overflow-y to eliminate scrollbar */
        }

        .checkbox-icon {
          transition: all 0.3s ease;
        }

        .service-checkbox:checked + label .checkbox-icon {
          background-color: #00a0e3;
          border-color: #00a0e3;
        }
      `}</style>
    </>
  );
}

