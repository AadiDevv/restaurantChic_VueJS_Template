<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const { locale } = useLang()

const schema = computed(() => z.object({
  firstName: z.string().min(2, locale.value === 'fr' ? 'Prénom requis' : 'First name required'),
  lastName:  z.string().min(2, locale.value === 'fr' ? 'Nom requis' : 'Last name required'),
  email:     z.string().email(locale.value === 'fr' ? 'Email invalide' : 'Invalid email'),
  phone:     z.string().min(8, locale.value === 'fr' ? 'Téléphone requis' : 'Phone required'),
  date:      z.string().min(1, locale.value === 'fr' ? 'Date requise' : 'Date required'),
  time:      z.string().min(1, locale.value === 'fr' ? 'Horaire requis' : 'Time required'),
  guests:    z.string().min(1),
  message:   z.string().optional()
}))

type Schema = z.output<ReturnType<typeof schema.value.parse>> & {
  firstName: string; lastName: string; email: string; phone: string;
  date: string; time: string; guests: string; message?: string
}

const state = reactive({
  firstName: '',
  lastName:  '',
  email:     '',
  phone:     '',
  date:      '',
  time:      '',
  guests:    '2',
  message:   ''
})

const submitted = ref(false)

const timeSlots = ['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30']
const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8+']

function onSubmit(event: FormSubmitEvent<Schema>) {
  // Ici : remplacer par un appel API (ex: $fetch('/api/reservations', ...))
  console.log('Reservation:', event.data)
  submitted.value = true
}
</script>

<template>
  <div>
    <!-- État succès -->
    <div
      v-if="submitted"
      class="text-center py-16 space-y-4"
    >
      <div
        class="w-16 h-16 rounded-full border border-primary-500/40 flex items-center justify-center mx-auto mb-6"
      >
        <UIcon name="i-lucide-check" class="size-7 text-primary-500" />
      </div>
      <h3
        class="text-display-md"
        style="font-family: var(--font-display);"
      >
        {{ locale === 'fr' ? 'Demande reçue' : 'Request received' }}
      </h3>
      <p class="text-sm text-muted max-w-sm mx-auto leading-relaxed">
        {{ locale === 'fr'
          ? `Nous vous confirmerons votre réservation par email sous 24h. À bientôt chez BRAISE.`
          : `We will confirm your reservation by email within 24 hours. See you at BRAISE.` }}
      </p>
      <UButton
        variant="ghost"
        color="neutral"
        class="mt-4"
        @click="submitted = false"
      >
        {{ locale === 'fr' ? 'Nouvelle réservation' : 'New reservation' }}
      </UButton>
    </div>

    <!-- Formulaire -->
    <UForm
      v-else
      :schema="schema"
      :state="state"
      class="space-y-6"
      @submit="onSubmit"
    >
      <!-- Nom / Prénom -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UFormField
          name="firstName"
          :label="locale === 'fr' ? 'Prénom' : 'First name'"
        >
          <UInput
            v-model="state.firstName"
            :placeholder="locale === 'fr' ? 'Marie' : 'Marie'"
            class="w-full"
          />
        </UFormField>
        <UFormField
          name="lastName"
          :label="locale === 'fr' ? 'Nom' : 'Last name'"
        >
          <UInput
            v-model="state.lastName"
            :placeholder="locale === 'fr' ? 'Dupont' : 'Dupont'"
            class="w-full"
          />
        </UFormField>
      </div>

      <!-- Email / Téléphone -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UFormField
          name="email"
          :label="locale === 'fr' ? 'Email' : 'Email'"
        >
          <UInput
            v-model="state.email"
            type="email"
            placeholder="marie@exemple.fr"
            class="w-full"
          />
        </UFormField>
        <UFormField
          name="phone"
          :label="locale === 'fr' ? 'Téléphone' : 'Phone'"
        >
          <UInput
            v-model="state.phone"
            type="tel"
            placeholder="+33 6 00 00 00 00"
            class="w-full"
          />
        </UFormField>
      </div>

      <!-- Date / Heure / Couverts -->
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <UFormField
          name="date"
          :label="locale === 'fr' ? 'Date' : 'Date'"
          class="col-span-2 sm:col-span-1"
        >
          <UInput
            v-model="state.date"
            type="date"
            class="w-full"
          />
        </UFormField>
        <UFormField
          name="time"
          :label="locale === 'fr' ? 'Horaire' : 'Time'"
        >
          <USelect
            v-model="state.time"
            :items="timeSlots"
            :placeholder="locale === 'fr' ? 'Choisir' : 'Choose'"
            class="w-full"
          />
        </UFormField>
        <UFormField
          name="guests"
          :label="locale === 'fr' ? 'Couverts' : 'Guests'"
        >
          <USelect
            v-model="state.guests"
            :items="guestOptions"
            class="w-full"
          />
        </UFormField>
      </div>

      <!-- Message -->
      <UFormField
        name="message"
        :label="locale === 'fr' ? 'Message (optionnel)' : 'Message (optional)'"
      >
        <UTextarea
          v-model="state.message"
          :placeholder="locale === 'fr'
            ? 'Occasion spéciale, allergie, demande particulière…'
            : 'Special occasion, allergy, specific request…'"
          :rows="4"
          class="w-full"
        />
      </UFormField>

      <UButton
        type="submit"
        size="lg"
        class="w-full shadow-glow-gold"
      >
        {{ locale === 'fr' ? 'Envoyer la demande' : 'Send request' }}
      </UButton>
    </UForm>
  </div>
</template>
