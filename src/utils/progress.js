const KEY = 'sai-chem-progress-v1'

export function getProgress() {
  try { return JSON.parse(localStorage.getItem(KEY) || '{}') }
  catch { return {} }
}

export function setTopicProgress(topicId, data) {
  const all = getProgress()
  all[topicId] = { ...(all[topicId] || {}), ...data, updatedAt: Date.now() }
  localStorage.setItem(KEY, JSON.stringify(all))
  return all[topicId]
}

export function markTabComplete(topicId, tabKey) {
  const all = getProgress()
  const t = all[topicId] || { tabs: {} }
  t.tabs = { ...(t.tabs || {}), [tabKey]: true }
  all[topicId] = t
  localStorage.setItem(KEY, JSON.stringify(all))
}

export function topicCompletionPct(topicId, totalTabs = 6) {
  const t = getProgress()[topicId]
  if (!t || !t.tabs) return 0
  const done = Object.values(t.tabs).filter(Boolean).length
  return Math.round((done / totalTabs) * 100)
}
