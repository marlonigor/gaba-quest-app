'use server'

import prisma from '@/lib/prisma'

export async function getDashboardStats() {
  try {
    const totalSubjects = await prisma.subject.count();
    const totalQuestions = await prisma.question.count();
    const totalUsers = await prisma.user.count();

    return { totalSubjects, totalQuestions, totalUsers };
  } catch (error) {
    console.error('Error fetching stats:', error);
    // Silent fallback to not break the UI if DB is completely offline
    return { totalSubjects: 0, totalQuestions: 0, totalUsers: 0 };
  }
}
