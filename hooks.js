import { useState, useMemo } from 'react';
import { students } from '../data/students';

export const useStudentFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    major: 'all',
    year: 'all',
    status: 'all',
    attendance: 'all',
    gpa: 'all',
    payment: 'all'
  });

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const filteredStudents = useMemo(() => {
    return students.filter(student => {
      const matchesSearch = student.name.toLowerCase().includes(filters.search.toLowerCase()) ||
                           student.email.toLowerCase().includes(filters.search.toLowerCase());
      const matchesMajor = filters.major === 'all' || student.major === filters.major;
      const matchesYear = filters.year === 'all' || student.year === filters.year;
      const matchesStatus = filters.status === 'all' || student.status === filters.status;
      
      let matchesAttendance = true;
      if (filters.attendance === 'high') matchesAttendance = student.attendance >= 90;
      else if (filters.attendance === 'medium') matchesAttendance = student.attendance >= 70 && student.attendance < 90;
      else if (filters.attendance === 'low') matchesAttendance = student.attendance < 70;

      let matchesGpa = true;
      if (filters.gpa === 'high') matchesGpa = student.gpa >= 3.5;
      else if (filters.gpa === 'medium') matchesGpa = student.gpa >= 2.5 && student.gpa < 3.5;
      else if (filters.gpa === 'low') matchesGpa = student.gpa < 2.5;

      let matchesPayment = true;
      if (filters.payment === 'paid') matchesPayment = student.paymentStatus === 'paid';
      else if (filters.payment === 'pending') matchesPayment = student.paymentStatus === 'pending';
      else if (filters.payment === 'overdue') matchesPayment = student.paymentStatus === 'overdue';

      return matchesSearch && matchesMajor && matchesYear && matchesStatus && 
             matchesAttendance && matchesGpa && matchesPayment;
    });
  }, [filters]);

  return { filters, updateFilter, filteredStudents };
};

export const usePagination = (items, itemsPerPage = 12) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextPage = () => goToPage(currentPage + 1);
  const prevPage = () => goToPage(currentPage - 1);

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    nextPage,
    prevPage,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
};

export const useStudentStats = (students) => {
  return useMemo(() => {
    const total = students.length;
    const active = students.filter(s => s.status === 'active').length;
    const avgGpa = (students.reduce((sum, s) => sum + s.gpa, 0) / total).toFixed(2);
    const avgAttendance = (students.reduce((sum, s) => sum + s.attendance, 0) / total).toFixed(1);
    const highPerformers = students.filter(s => s.gpa >= 3.5).length;
    const onProbation = students.filter(s => s.status === 'probation').length;
    const onLeave = students.filter(s => s.status === 'leave').length;
    const lowAttendance = students.filter(s => s.attendance < 70).length;
    
    const majorDistribution = students.reduce((acc, s) => {
      acc[s.major] = (acc[s.major] || 0) + 1;
      return acc;
    }, {});

    const gpaDistribution = {
      '3.5-4.0': students.filter(s => s.gpa >= 3.5).length,
      '3.0-3.5': students.filter(s => s.gpa >= 3.0 && s.gpa < 3.5).length,
      '2.5-3.0': students.filter(s => s.gpa >= 2.5 && s.gpa < 3.0).length,
      '2.0-2.5': students.filter(s => s.gpa >= 2.0 && s.gpa < 2.5).length
    };

    const yearDistribution = {
      'Freshman': students.filter(s => s.year === 'Freshman').length,
      'Sophomore': students.filter(s => s.year === 'Sophomore').length,
      'Junior': students.filter(s => s.year === 'Junior').length,
      'Senior': students.filter(s => s.year === 'Senior').length
    };

    return {
      total,
      active,
      avgGpa,
      avgAttendance,
      highPerformers,
      onProbation,
      onLeave,
      lowAttendance,
      majorDistribution,
      gpaDistribution,
      yearDistribution
    };
  }, [students]);
};

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openModal = (student) => {
    setSelectedStudent(student);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedStudent(null);
  };

  return { isOpen, selectedStudent, openModal, closeModal };
};