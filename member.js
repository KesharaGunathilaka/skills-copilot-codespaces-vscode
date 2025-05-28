function skillsMember() {
    return {
        name: "Member",
        description: "A member of the team with specific skills.",
        skills: [],
        addSkill(skill) {
            this.skills.push(skill);
        },
        removeSkill(skill) {
            const index = this.skills.indexOf(skill);
            if (index > -1) {
                this.skills.splice(index, 1);
            }
        },
        listSkills() {
            return this.skills.join(", ");
        }
    };
}
