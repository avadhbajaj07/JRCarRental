-- ===================================================
-- JR Auto Fleet — Real Client Data
-- carbookingmauritius.com | Mauritius
-- ===================================================

-- ===== BRANCHES =====
INSERT INTO "Branch" (id, name, address, phone, email, "isActive", "pickupCharge", "deliveryCharge") VALUES
('br-jr-001', 'JR Auto Fleet HQ', 'D''Epinay, Pamplemousses, Mauritius', '+230 5934 5715', 'starstuffcompany@gmail.com', true, 0, 0),
('br-jr-002', 'JR Auto Fleet — SSR Airport', 'SSR International Airport, Plaine Magnien, Mauritius', '+230 5934 5715', 'starstuffcompany@gmail.com', true, 0, 0)
ON CONFLICT (id) DO NOTHING;

-- ===== CARS =====
INSERT INTO "Car" (id, slug, make, model, year, category, status, seats, doors, luggage, "fuelType", transmission, "engineCC", "pricePerDay", "pricePerWeek", "priceDeposit", "thumbnailUrl", features, description, "plateNumber", color, "branchId", "updatedAt") VALUES
('jr-c1', 'suzuki-swift-glx-2025', 'Suzuki', 'Swift GLX', 2025, 'ECONOMY', 'AVAILABLE', 5, 4, 2, 'PETROL', 'AUTOMATIC', 1200, 1800, 10800, 5000, 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800', ARRAY['AC', 'Bluetooth', 'Reverse Camera', 'Keyless Entry', 'CarPlay'], 'Top-of-the-range 2025 Swift GLX. Flagship model, spotlessly clean.', 'JR-SW1', 'Pearl White', 'br-jr-001', NOW()),
('jr-c2', 'suzuki-swift-2024', 'Suzuki', 'Swift', 2024, 'ECONOMY', 'AVAILABLE', 5, 4, 2, 'PETROL', 'AUTOMATIC', 1200, 1500, 9000, 4000, 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800', ARRAY['AC', 'Bluetooth', 'USB', 'Power Windows'], 'Reliable 2024 Suzuki Swift automatic. Great fuel economy.', 'JR-SW2', 'Silver', 'br-jr-001', NOW()),
('jr-c3', 'kia-picanto-2024', 'Kia', 'Picanto', 2024, 'MINI', 'AVAILABLE', 5, 4, 1, 'PETROL', 'AUTOMATIC', 1000, 1500, 9000, 4000, 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', ARRAY['AC', 'Bluetooth', 'USB', 'Touchscreen'], 'Compact 2024 Kia Picanto. Ideal for solo travellers.', 'JR-KP1', 'Red', 'br-jr-002', NOW()),
('jr-c4', 'suzuki-swift-2023', 'Suzuki', 'Swift', 2023, 'ECONOMY', 'AVAILABLE', 5, 4, 2, 'PETROL', 'AUTOMATIC', 1200, 1300, 7800, 3500, 'https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=800', ARRAY['AC', 'Bluetooth', 'Radio', 'Power Windows'], 'Well-maintained 2023 Swift at best value price.', 'JR-SW3', 'Blue', 'br-jr-001', NOW()),
('jr-c5', 'suzuki-celerio-2022', 'Suzuki', 'Celerio', 2022, 'MINI', 'AVAILABLE', 5, 4, 1, 'PETROL', 'AUTOMATIC', 1000, 1300, 7800, 3500, 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800', ARRAY['AC', 'Bluetooth', 'USB', 'Power Steering'], 'Affordable 2022 Celerio. Light and economical for day trips.', 'JR-CE1', 'White', 'br-jr-002', NOW()),
('jr-c6', 'suzuki-fronx-mild-hybrid-2024', 'Suzuki', 'Fronx', 2024, 'COMPACT', 'AVAILABLE', 5, 4, 2, 'HYBRID', 'AUTOMATIC', 1500, 2000, 12000, 6000, 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800', ARRAY['AC', 'CarPlay', 'Android Auto', 'Lane Assist', 'Mild Hybrid', 'Sunroof'], 'Premium 2024 Fronx mild hybrid. Ideal for families and tours.', 'JR-FX1', 'Granite Grey', 'br-jr-001', NOW())
ON CONFLICT (id) DO NOTHING;

-- ===== ADDONS =====
INSERT INTO "Addon" (id, name, description, icon, "priceType", price, "maxQuantity", "isActive") VALUES
('jr-ad1', 'Airport Transfer', 'Pickup or drop-off at SSR International Airport. 24/7.', '✈️', 'FIXED', 0, 1, true),
('jr-ad2', 'Northern Charm Tour', 'Full-day tour: Pamplemousses Garden, Cap Malheureux & Grand Bay. Rs 8,000.', '🗺️', 'FIXED', 8000, 1, true),
('jr-ad3', 'Breakdown Assistance', '24/7 roadside assistance anywhere on the island.', '🔧', 'FIXED', 0, 1, true),
('jr-ad4', 'Child Seat', 'Certified child safety seat, sanitised before every hire.', '👶', 'PER_DAY', 150, 2, true),
('jr-ad5', 'GPS Navigation', 'Pre-loaded GPS with Mauritius maps.', '📍', 'PER_DAY', 200, 1, true),
('jr-ad6', 'Additional Driver', 'Add a second authorised driver to your rental.', '👤', 'FIXED', 300, 1, true)
ON CONFLICT (id) DO NOTHING;

-- ===== COUPONS =====
INSERT INTO "Coupon" (id, code, type, value, "minBookingVal", "maxUses", "usedCount", "isActive") VALUES
('jr-cp1', 'JRWELCOME', 'PERCENTAGE', 10, 1300, 100, 0, true),
('jr-cp2', 'JRWEEKEND', 'PERCENTAGE', 15, 3900, 50, 0, true),
('jr-cp3', 'JRLONG7', 'FIXED', 1000, 9100, 30, 0, true),
('jr-cp4', 'JRAIRPORT', 'PERCENTAGE', 5, 3900, 200, 0, true)
ON CONFLICT (id) DO NOTHING;

-- ===== PRICING RULES =====
INSERT INTO "PricingRule" (id, name, type, multiplier, "minDays", "isActive", priority) VALUES
('jr-pr1', 'Weekly Discount', 'LONG_TERM', 0.90, 7, true, 1),
('jr-pr2', 'Fortnightly Discount', 'LONG_TERM', 0.85, 14, true, 2),
('jr-pr3', 'Weekend Surcharge', 'SEASONAL', 1.05, 2, true, 0)
ON CONFLICT (id) DO NOTHING;
