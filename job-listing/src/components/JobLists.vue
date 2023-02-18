<template>
  <job-card :new-list="props.new">
    <template #profile>
      <div class="profile">
        <div class="profile-logo">
          <img :src="`/img/${props.logo}.svg`" :alt="props.company">
        </div>
        <div class="profile-detail">
          <div class="title">
            <span>{{ props.company }}</span>
            <span v-if="props.new">NEW!</span>
            <span v-if="props.featured">FEATURED</span>
          </div>
          <a href="#">{{ props.position }}</a>
          <div class="contract">
            <span>{{ props.postedAt }}</span>
            <span>{{ props.contract }}</span>
            <span>{{ props.location }}</span>
          </div>
        </div>
        <div class="profile-tag">
          <JobTag
            @click-filter="chooseFilter"
            :role="props.role"
            :level="props.level"
            :tools="props.tools"
            :languages="props.languages"
          />
        </div>
      </div>
    </template>
  </job-card>
</template>

<script setup>
import JobCard from './JobCard.vue';
import JobTag from './JobTag.vue';

const props = defineProps({
  company: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  featured: {
    type: Boolean,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  postedAt: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  languages: {
    type: Array,
    required: true,
  },
  tools: {
    type: Array,
    required: true,
  },
});

const emits = defineEmits(['clickFilter']);

const chooseFilter = (value) => {
  emits('clickFilter', value);
};
</script>

<style scoped>
.profile {
  display: flex;
  align-items: center;
  width: 100%;
}

img {
  padding-right: 1.2em;
}

.title {
  padding-bottom: .9em;
}
.profile-detail {
  width: 50%;
}
.profile-tag {
  display: flex;
  justify-content: flex-end;
  width: 50%;
  flex-wrap: wrap;
}

.title > span:nth-child(1){
  font-weight: 700;
  color: var(--primary);
  padding-right: 1em;
}

.title > span:nth-child(2) {
  background-color: var(--primary);
}
.title > span:nth-child(3) {
  background-color: var(--black-grayish-cyan);
}

.title > span:nth-child(2),
.title > span:nth-child(3) {
  margin-right: .7em;
  color: var(--filter-light-grayish-cyan);
  font-size: .7rem;
  font-weight: 700;
  border-radius: 15px;
  padding: .5em;
}

a {
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2em;
  color: var(--black-grayish-cyan);
  transition: color .1s ease-in;
}

a:hover {
  color: var(--primary);
}

.contract {
  padding-top: .4em;
}

.contract > span {
  color: var(--dark-grayish-cyan)
}

.contract > span:nth-child(1):after,
.contract > span:nth-child(2):after {
  display: inline-block;
  content: '';
  height: 3px;
  width: 3px;
  margin: 0 .5em .2em .5em;
  background-color: var(--dark-grayish-cyan);
  border-radius: 50%;
}

@media (max-width: 375px) {
  .profile {
    position: relative;
    flex-direction: column;
    align-items: start;
    padding-top: 2em;
  }

  img {
    position: absolute;
    top: -2.5em;
    left: 0;
    width: 70px;
  }

  .profile-detail {
    padding-bottom: .8em;
  }

  .profile-tag {
    padding-top: .8em;
    border-top: 2px solid var(--filter-light-grayish-cyan);
    justify-content: start;
  }

  .profile-detail,
  .profile-tag {
    width: unset;
  }
}
</style>